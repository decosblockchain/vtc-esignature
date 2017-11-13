import {
  Component,
  OnInit,
} from '@angular/core';

import {
  Router
} from '@angular/router';

import { SignatureTx } from "../../models/signaturetx";
import { WalletService } from "../../services/wallet/wallet.service";
import { DocumentService } from "../../services/document/document.service";
import { BlockchainService } from "../../services/blockchain/blockchain.service";
@Component({
  selector: 'verifydocument',
  styleUrls: [ './verifydocument.component.scss' ],
  templateUrl: './verifydocument.component.html'
})
export class VerifyDocumentComponent implements OnInit {
  address : string  = "";
  passwordRequired : boolean = false;
  password : string = "";
  transactions : SignatureTx[] = [];
  constructor(private router : Router, private walletService : WalletService, private blockchainService : BlockchainService, private documentService : DocumentService) {
   

  }
  public ngOnInit() {
  }

  onFileChange(event: any) {
    if(event.target.files) {
      var file = event.target.files[0];
      this.documentService.generateHash(file, (hash) => {
        this.address = this.documentService.getAddressFromHash(hash);
        this.transactions = [];
        this.blockchainService.findIncomingTransactions(this.address).subscribe((result) => {
          this.transactions = result;
        });
      });
    }
  }


}
