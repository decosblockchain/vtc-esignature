import {
  Component,
  OnInit,
} from '@angular/core';

import { WalletService } from "../../services/wallet/wallet.service";

@Component({
  selector: 'addfunds',
  styleUrls: [ './addfunds.component.scss' ],
  templateUrl: './addfunds.component.html'
})
export class AddFundsComponent implements OnInit {
  address : string  = "";

  constructor(private walletService : WalletService) {
    this.address = walletService.getAddress();

  }
  public ngOnInit() {
    console.log('hello `ChildDetail` component');
  }

}
