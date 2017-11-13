import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

import { Wallet } from '../../models/wallet';
import { Txo } from '../../models/txo';
import * as bip39 from 'bip39';
import * as crypto from 'crypto-browserify';
import * as convertHex from 'convert-hex';
import * as bitcoin from 'bitcoinjs-lib/src';
import { WalletService } from '../wallet/wallet.service';
import { SignatureTx } from '../../models/signaturetx';

@Injectable() 
export class BlockchainService {
    timeout : any;
    totalCost : number = 200000;
    transactionCost : number = 100000;
    balance : BehaviorSubject<number>;
    incomingTransactions : BehaviorSubject<SignatureTx[]>;
    outgoingTransactions : BehaviorSubject<SignatureTx[]>;
    
    constructor(private walletService : WalletService, private http : HttpClient) {
        this.balance = new BehaviorSubject<number>(0);
        this.incomingTransactions = new BehaviorSubject<SignatureTx[]>([]);
        this.outgoingTransactions = new BehaviorSubject<SignatureTx[]>([]);
        this.walletService.hasWallet().subscribe((hasWallet) => {
            if(hasWallet && this.timeout === undefined) {
                this.timeout = setInterval(this.updateBalance.bind(this), 5000);
            }
        })
    }

    getOutgoingTransactions() : Observable<SignatureTx[]> {
        this.updateOutgoingTransactions();
        return this.outgoingTransactions.asObservable();
    }

    getIncomingTransactions() : Observable<SignatureTx[]> {
        this.updateIncomingTransactions();
        return this.incomingTransactions.asObservable();
    }

    getBalance() : Observable<number> {
        return this.balance.asObservable();
    }

    updateTransactions() : void {
        this.updateIncomingTransactions();
        this.updateOutgoingTransactions();
    } 

    updateIncomingTransactions() : void {
        this.http.get<SignatureTx[]>("/backend/esignatureTransactions/in/" + this.walletService.getAddress()).subscribe((result) => {
            var newArray = [];
            result.forEach((tx) => {
                if(tx.time == 0) newArray.push(tx);
            });

            result.sort((a,b) => { if(a.time < b.time) return -1; else if(b.time < a.time) return 1; else return 0; }).forEach((tx) => {
                if(tx.time != 0) newArray.push(tx);
            });

            this.incomingTransactions.next(newArray);
        });
    }

    updateOutgoingTransactions() : void {
        this.http.get<SignatureTx[]>("/backend/esignatureTransactions/out/" + this.walletService.getAddress()).subscribe((result) => {
            
            var newArray = [];
            result.forEach((tx) => {
                if(tx.time == 0) newArray.push(tx);
            });

            result.sort((a,b) => { if(a.time < b.time) return -1; else if(b.time < a.time) return 1; else return 0; }).forEach((tx) => {
                if(tx.time != 0) newArray.push(tx);
            });


            this.outgoingTransactions.next(newArray);
        });
    }

    findIncomingTransactions(address : string) : Observable<SignatureTx[]> {
        return this.http.get<SignatureTx[]>("/backend/esignatureTransactions/in/" + address);
    }

    updateBalance() : void {
        this.http.get<number>("/backend/addressBalance/" + this.walletService.getAddress()).subscribe((result) => {
            this.balance.next(result / 100000000);
        });
    }

    getSignatureTransaction(documentAddress : string, operation : string) : Observable<any> {
        return this.http.get<Txo[]>("/backend/addressTxos/" + this.walletService.getAddress()).map((result) => {
            var tx = new bitcoin.TransactionBuilder(this.walletService.network);
            var total = 0;
            result.forEach((txo) => {
                if(txo.spender == null) {
                    if(total <= this.transactionCost) {
                        total += txo.value;
                        tx.addInput(txo.txhash,txo.vout);
                    }
                }
            });
            tx.addOutput(this.walletService.getAddress(), total-this.totalCost);
            tx.addOutput(documentAddress, 100);
            var ret = bitcoin.script.compile(
                [
                  bitcoin.opcodes.OP_RETURN,
                  new Buffer(operation)
                ])
            tx.addOutput(ret, 0);
            tx.addOutput("WxVSkmSUCUXFsnTRVdy5s2jtXXiwdjg75P", this.totalCost - 100 - this.transactionCost);
            return tx;
        });
    }

    sendTransaction(hex : string) : Observable<string> {
        return this.http.post("/backend/sendRawTransaction", hex, { responseType : "text" });
    }
}