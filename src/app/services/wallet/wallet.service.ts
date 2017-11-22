import { Injectable, NgZone } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Wallet } from '../../models/wallet';
import * as bip39 from 'bip39';
import * as crypto from 'crypto-browserify';
import * as convertHex from 'convert-hex';
import * as bitcoin from 'bitcoinjs-lib/src';
import { Document } from '../../models/document';

@Injectable()
export class WalletService {
    private lastGeneratedMnemonic : string = '';
    private walletInitialized : BehaviorSubject<boolean>;
    public network : any = {
        messagePrefix: 'Vertcoin Signed Message:\n',
        bip32: {
          public: 0x043587cf,
          private: 0x04358394
        },
        pubKeyHash: 0x4A,
        scriptHash: 0xC4,
        wif: 0x80
      };

    wallet : Wallet;

    constructor(private ngZone : NgZone, private http : HttpClient) {
        this.walletInitialized = new BehaviorSubject<boolean>(false);
        this.restoreWallet();
    }

    saveWallet() {
        var walletJson = JSON.stringify(this.wallet);
        localStorage.setItem("wallet", walletJson);
    }

    restoreWallet() { 
        var walletJson = localStorage.getItem("wallet");
        try {
            this.wallet = JSON.parse(walletJson);
        } catch (e) {
            this.wallet = null;
        }
        this.walletInitialized.next(this.wallet != null);
    }

    hasWallet() : Observable<boolean> {
        return this.walletInitialized.asObservable();
    }

    generateNewHDKeyPair() : string {
        var randomBytes = crypto.randomBytes(16);
        this.lastGeneratedMnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'));
        return this.lastGeneratedMnemonic;
    }

    getAddress() : string {
        return this.getAddressFromIndex(0);
    }

    setDocument(address : string, fileName : string) {
        if(!this.wallet.documents) {
            this.wallet.documents = [];
        }
        if(!this.wallet.documents.find(d => d.address == address)) 
        {
            this.wallet.documents.push({ address : address, name : fileName, dateAdded : new Date() });
        }
        
        this.saveWallet();
    }

    getDocument(address : string) : Document { 
        if(this.wallet.documents && this.wallet.documents.find(d => d.address == address)) { 
            return this.wallet.documents.find(d => d.address == address);
        } else {
            return { address : address, name : "Unknown document (" + address + ")" };
        }
    }

    getAddressFromIndex(index : number) : string {
        var node = bitcoin.HDNode.fromBase58(this.wallet.publicKey,this.network);
        var derived = node.derive(index);
        return derived.getAddress();
      }

      getAllDocuments() : Document[] {
        return this.wallet.documents.sort((a,b) => { if (a.dateAdded.valueOf() < b.dateAdded.valueOf()) return 1; else if (a.dateAdded.valueOf() > b.dateAdded.valueOf()) return -1; else return 0; });
    }


    tryUnlockWallet(password : string, callback : (success : boolean) => void) : void {
        crypto.pbkdf2(password, this.wallet.checkPhraseSalt, 100000, 32, 'sha256', (err, encKey) => {
            if(err) {
            callback(false);
            return;
            }
            var decipher = crypto.createDecipheriv('aes256', encKey, convertHex.hexToBytes(this.wallet.checkPhraseIv));
            var decrypted = decipher.update(this.wallet.checkPhraseCipherText,'hex', 'ascii');
            decrypted += decipher.final('ascii');
            if(decrypted === 'ESIGN_WALLET') {
            callback(true);
            return;
            }
            callback(false);
            return;
        });
    }

    signTransaction(tx : any, password : string, callback : (err : any, result : any) => void) {
        crypto.pbkdf2(password, this.wallet.salt, 100000, 32, 'sha256', (err, encKey) => {
            if(err) {
            callback(err, null);
            return;
            }
            var iv = convertHex.hexToBytes(this.wallet.iv);
            
            var decipher = crypto.createDecipheriv('aes256', encKey, iv);
            var decrypted = decipher.update(this.wallet.cipherText,'hex', 'ascii');
            decrypted += decipher.final('ascii');
            var root = bitcoin.HDNode.fromBase58(decrypted, this.network);
            var child = root.derive(0);
            tx.sign(0, child.keyPair);
            callback(null, tx.build().toHex());
        });
    }

    getIdentity(name : string, email : string) : Observable<boolean> {
        return this.http.post("/identify/identify", {
            "name" : name,
            "email" : email,
            "address" : this.getAddress()
        }).map((result : Response) => { 
            return result.ok;
        });
    }
    

    encryptNewWallet(password : string, callback : () => void) : void {
        this.wallet = new Wallet();
    
        this.wallet.checkPhraseSalt = crypto.randomBytes(32).toString('hex');
        crypto.pbkdf2(password, this.wallet.checkPhraseSalt, 100000, 32, 'sha256', (err, encKey) => {
          if(err) console.error(err);
          var checkPhraseIv = crypto.randomBytes(16);
          this.wallet.checkPhraseIv = checkPhraseIv.toString('hex');
          var cipher = crypto.createCipheriv('aes256', encKey, checkPhraseIv);
          var encrypted = cipher.update('ESIGN_WALLET','ascii', 'hex');
          encrypted += cipher.final('hex');
          this.wallet.checkPhraseCipherText = encrypted;
          
          this.wallet.salt = crypto.randomBytes(32).toString('hex');
          crypto.pbkdf2(password, this.wallet.salt, 100000, 32, 'sha256', (err, encKey2) => {
              if(err) console.error(err);
            var iv = crypto.randomBytes(16)
            this.wallet.iv = iv.toString('hex');
            var cipher2 = crypto.createCipheriv('aes256', encKey2, iv);
    
            var seed = bip39.mnemonicToSeed(this.lastGeneratedMnemonic);
            this.lastGeneratedMnemonic = '';
            var root = bitcoin.HDNode.fromSeedBuffer(seed, this.network);
            var xprv = root.toBase58();
            var encrypted = cipher2.update(xprv,'ascii', 'hex');
            encrypted += cipher2.final('hex');
            this.wallet.cipherText = encrypted;
            this.wallet.publicKey = root.neutered().toBase58();
            this.saveWallet();
            this.walletInitialized.next(this.wallet != null);
            this.ngZone.run(() => { callback(); });
        
          });
        });
      }
}
