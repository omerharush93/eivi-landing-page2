import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  navigationLinks = [
    { label: 'דף הבית', route: '/landing', external: false },
    { label: 'אודות', route: '/landing/about', external: false },
    { label: 'צור קשר', route: '/landing/contact', external: false },
    { label: 'מדיניות פרטיות', route: '/landing/privacy', external: false },
    { label: 'תנאי שימוש', route: '/landing/terms', external: false }
  ];
  
  socialLinks = [
    { icon: '📧', label: 'Email', url: 'mailto:info@eivi.co.il' },
    { icon: '📱', label: 'WhatsApp', url: 'https://wa.me/972XXXXXXXXX' }
  ];
}
