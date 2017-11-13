import {
  Component,
  OnInit,
} from '@angular/core';
import { SignatureTx } from '../../models/signaturetx';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import { WalletService } from '../../services/wallet/wallet.service';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  transactions : SignatureTx[] = [];
  identityTransactions : SignatureTx[] = [];
  balance : number = 0;
  hasIdentity : boolean = false;

  constructor(private blockchainService : BlockchainService, private walletService : WalletService) {
    walletService.hasWallet().subscribe((result) => {
      if(result) {
        blockchainService.getOutgoingTransactions().subscribe((result) => {
          this.transactions = result;
        });

        blockchainService.getIdentityTransactions().subscribe((result) => {
          this.identityTransactions = result;
          if(this.identityTransactions.find((t) => { return t.address === 'WvWN5qS34HiV5UxdT39ssnSUwfbPUY2MX5'; })) {
            this.hasIdentity = true;
          }
        });
    
        blockchainService.getBalance().subscribe((result) => {
          this.balance = result;
        });
      }
    });
  }

  public getDocument(address : string) {
    return this.walletService.getDocument(address);
  }

  public ngOnInit() {
    
  }

}
