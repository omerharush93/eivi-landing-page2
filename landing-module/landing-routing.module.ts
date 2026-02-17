import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';

const routes: Routes = [
  {
    path: '',
    component: LandingHomeComponent,
    data: { title: 'Eivi - אישורי הגעה בראש שקט' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'אודות Eivi - מי אנחנו' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'צור קשר - Eivi' }
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
    data: { title: 'מדיניות פרטיות - Eivi' }
  },
  {
    path: 'terms',
    component: TermsOfServiceComponent,
    data: { title: 'תנאי שימוש - Eivi' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
