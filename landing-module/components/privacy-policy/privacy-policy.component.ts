import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  lastUpdated = 'פברואר 2026';
  companyName = 'Eivi';
  operatorName = 'עומר חרוש';
  licenseNumber = '308490994';
  contactEmail = 'info@eivi.co.il';
}
