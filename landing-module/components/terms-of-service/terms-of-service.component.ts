import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss']
})
export class TermsOfServiceComponent {
  lastUpdated = 'פברואר 2026';
  companyName = 'Eivi';
  operatorName = 'עומר חרוש';
  licenseNumber = '308490994';
  contactEmail = 'info@eivi.co.il';
  domain = 'eivi.co.il';
}
