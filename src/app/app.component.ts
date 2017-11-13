/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { WalletService } from './services/wallet/wallet.service';
import { BlockchainService } from './services/blockchain/blockchain.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  balance : number = 0;
  walletInitialized : boolean = false;
  constructor(private walletService : WalletService, private blockchainService : BlockchainService) {
    this.walletService.hasWallet().subscribe((hasWallet) => {
      this.walletInitialized = hasWallet;
      if(hasWallet) {
        this.blockchainService.getBalance().subscribe((balance) => {
          this.balance = balance;
        });
      }
    });
  }

  public ngOnInit() {
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
