import { Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { OnboardingWelcomeComponent } from './pages/onboarding/welcome/welcome.component';
import { OnboardingNewWalletComponent } from './pages/onboarding/newwallet/newwallet.component';
import { OnboardingSetWalletPasswordComponent } from './pages/onboarding/setwalletpassword/setwalletpassword.component';

import { HomeComponent } from './pages/home/home.component';

import { SignDocumentComponent } from './pages/signdocument/signdocument.component';
import { VerifyDocumentComponent } from './pages/verifydocument/verifydocument.component';


import { AddFundsComponent } from './pages/addfunds/addfunds.component';


export const ROUTES: Routes = [
  { path: '',      component: OnboardingComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'addfunds',      component: AddFundsComponent },
  { path: 'signdocument',      component: SignDocumentComponent },
  { path: 'verifydocument',      component: VerifyDocumentComponent },
  { path: 'onboarding',  component: OnboardingComponent,
      children : [
        { path : 'welcome', component : OnboardingWelcomeComponent },
        { path : 'newwallet', component : OnboardingNewWalletComponent },
        { path : 'setwalletpassword', component : OnboardingSetWalletPasswordComponent }
      ] 
  }
];
