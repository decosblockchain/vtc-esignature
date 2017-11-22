import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

import { Wallet } from '../../models/wallet';
import { Document } from '../../models/document';
import * as bip39 from 'bip39';
import * as crypto from 'crypto-browserify';
import * as convertHex from 'convert-hex';
import * as bitcoin from 'bitcoinjs-lib/src';
import * as bigi from 'bigi/lib';
import { WalletService } from '../wallet/wallet.service';

@Injectable()
export class DocumentService {

    documents : any = {};

    constructor(private walletService : WalletService) {


    }

    generateHash(document : File, callback : (Buffer) => void)  {
        var reader = new FileReader();
        
        reader.onloadend = (evt) => {
            if (reader.readyState == 2) { 
                var arr = new Uint8Array(reader.result);
                var hash = bitcoin.crypto.sha256(arr);
                callback(hash);
            }
        };      
        
        reader.readAsArrayBuffer(document);
    }

    getAddressFromHash(hash : Buffer) : string {
        var d = bigi.fromBuffer(hash);
        var keyPair = new bitcoin.ECPair(d);
        keyPair.network = this.walletService.network;
        return keyPair.getAddress();
    }

    cacheDocumentAddress(document : File, address : string) {
        this.walletService.setDocument(address, document.name);
    }

    getAllDocuments() : Document[] {
        return this.walletService.getAllDocuments();
    }

    
    
}