import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router
} from '@angular/router';

import { WalletService } from '../../services/wallet/wallet.service';

@Component({
  selector: 'detail',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class OnboardingComponent implements OnInit {

  constructor(private router: Router, private walletService : WalletService) {}

  public ngOnInit() {
    this.walletService.hasWallet().first().subscribe((hasWallet) => {
      if(hasWallet) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/onboarding/welcome']);
      }
    });
  }

}
