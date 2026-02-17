import { Component } from '@angular/core';

interface TeamValue {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  brandName = 'Eivi';
  pronunciation = 'Evi';
  legalEntity = 'Omer Harush';
  licenseNumber = '308490994';
  
  values: TeamValue[] = [
    {
      icon: '🎯',
      title: 'מיקוד בלקוח',
      description: 'אנחנו מאמינים שתכנון אירוע צריך להיות פשוט ונעים, לא מלחיץ ומסובך'
    },
    {
      icon: '🤖',
      title: 'טכנולוגיה חכמה',
      description: 'שימוש בבינה מלאכותית ואוטומציה כדי לחסוך לכם זמן יקר'
    },
    {
      icon: '💡',
      title: 'חדשנות מתמדת',
      description: 'אנחנו תמיד מחפשים דרכים חדשות לשפר ולהקל על התהליך'
    },
    {
      icon: '💚',
      title: 'תמיכה אמיתית',
      description: 'צוות תמיכה בעברית זמין לעזור לכם בכל שלב'
    }
  ];
  
  milestones = [
    { year: '2024', event: 'השקת Eivi - מערכת אישורי הגעה אוטומטית' },
    { year: '2025', event: 'הוספת מודול סידורי הושבה חכם' },
    { year: '2026', event: 'יותר מ-500 זוגות מרוצים' }
  ];
}
