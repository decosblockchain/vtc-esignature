import {
  Component,
  OnInit,
} from '@angular/core';
import { WalletService } from '../../../services/wallet/wallet.service';

@Component({
  selector: 'onboarding-newwallet',
  styleUrls: [ './newwallet.component.scss' ],
  templateUrl: './newwallet.component.html'
})
export class OnboardingNewWalletComponent implements OnInit {
  recoverySeed : string = "";
  constructor(private walletService : WalletService) {}
  public ngOnInit() { 
    this.recoverySeed = this.walletService.generateNewHDKeyPair();
  }

}
