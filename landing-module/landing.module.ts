import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';

// Components
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';

// Shared Components
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    // Pages
    LandingHomeComponent,
    AboutComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    
    // Shared
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
