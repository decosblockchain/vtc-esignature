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
  selector: 'verifyidentity',
  styleUrls: [ './verifyidentity.component.scss' ],
  templateUrl: './verifyidentity.component.html'
})
export class VerifyIdentityComponent implements OnInit {
  name : string = "";
  email : string = "";
  constructor(private router : Router, private walletService : WalletService, private blockchainService : BlockchainService, private documentService : DocumentService) {
   

  }
  public ngOnInit() {
  }

  public confirm() {
    this.walletService.getIdentity(this.name, this.email).subscribe((result) => {
      this.router.navigate(['/home']);
    })
  }
}
