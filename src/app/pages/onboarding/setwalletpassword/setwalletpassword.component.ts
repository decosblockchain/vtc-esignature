import {
  Component,
  OnInit,
} from '@angular/core';

import {
  Router
} from '@angular/router';

import { WalletService } from '../../../services/wallet/wallet.service';

@Component({
  selector: 'onboarding-setwalletpassword',
  styleUrls: [ './setwalletpassword.component.css' ],
  templateUrl: './setwalletpassword.component.html'
})
export class OnboardingSetWalletPasswordComponent implements OnInit {
  password : string;
  confirmPassword : string;

  constructor(private walletService : WalletService, private router : Router) {}
  public ngOnInit() {
  }

  next() {
    this.walletService.encryptNewWallet(this.password, () => {
      this.router.navigate(['/home']);
    });
    
  }

}
