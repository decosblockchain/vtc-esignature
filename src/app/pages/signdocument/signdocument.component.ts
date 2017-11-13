import {
  Component,
  OnInit,
} from '@angular/core';

import {
  Router
} from '@angular/router';

import { WalletService } from "../../services/wallet/wallet.service";
import { DocumentService } from "../../services/document/document.service";
import { BlockchainService } from "../../services/blockchain/blockchain.service";
@Component({
  selector: 'signdocument',
  styleUrls: [ './signdocument.component.scss' ],
  templateUrl: './signdocument.component.html'
})
export class SignDocumentComponent implements OnInit {
  address : string  = "";
  passwordRequired : boolean = false;
  password : string = "";
  transaction : any = null;
  constructor(private router : Router, private walletService : WalletService, private blockchainService : BlockchainService, private documentService : DocumentService) {
   

  }
  public ngOnInit() {
  }

  onFileChange(event: any) {
    if(event.target.files) {
      var file = event.target.files[0];
      this.documentService.generateHash(file, (hash) => {
        this.address = this.documentService.getAddressFromHash(hash);
        this.documentService.cacheDocumentAddress(file,this.address);
      });
    }
  }

  sign() {
    this.blockchainService.getSignatureTransaction(this.address, "SIGN").subscribe((tx) => {
      this.transaction = tx;
      this.passwordRequired = true;
    });
  }

  signPassword() {
    this.walletService.tryUnlockWallet(this.password, (success) => {
      if(success) {
        this.walletService.signTransaction(this.transaction, this.password, (err, result) => {
          if(!err) {
            this.blockchainService.sendTransaction(result).subscribe((result) => {
              
              setTimeout(()=>{this.blockchainService.updateTransactions();},10000);
              this.router.navigate(['/home']);
            });
          }
        })
      }
    });
  }

}
