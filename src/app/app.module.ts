import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'angular2-moment';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { OnboardingWelcomeComponent } from './pages/onboarding/welcome/welcome.component';
import { OnboardingNewWalletComponent } from './pages/onboarding/newwallet/newwallet.component';
import { OnboardingSetWalletPasswordComponent } from './pages/onboarding/setwalletpassword/setwalletpassword.component';
import { AddFundsComponent } from './pages/addfunds/addfunds.component';
import { SignDocumentComponent } from './pages/signdocument/signdocument.component';
import { VerifyDocumentComponent } from './pages/verifydocument/verifydocument.component';
import { VerifyIdentityComponent } from './pages/verifyidentity/verifyidentity.component';
// Services
import { WalletService } from './services/wallet/wallet.service';
import { BlockchainService } from './services/blockchain/blockchain.service';
import { DocumentService } from './services/document/document.service';

// Pipes
import { NumeralPipe } from './pipes/numeral.pipe';


import { HttpClientModule } from '@angular/common/http';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  WalletService,
  BlockchainService,
  DocumentService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NumeralPipe,
    HomeComponent,
    OnboardingComponent,
    OnboardingWelcomeComponent,
    OnboardingNewWalletComponent,
    OnboardingSetWalletPasswordComponent,
    AddFundsComponent,
    SignDocumentComponent,
    VerifyDocumentComponent,
    VerifyIdentityComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MomentModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    HttpClientModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
    NumeralPipe
  ],

})
export class AppModule {

  constructor() {}

}
