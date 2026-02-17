import { Component, OnInit } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface SystemFeature {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
}

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent implements OnInit {
  
  // Hero Section Data
  heroTitle = 'Eivi - אישורי הגעה בראש שקט';
  heroSubtitle = 'הבינה המלאכותית שתארגן לכם את החתונה';
  heroCta = 'התחל עכשיו';
  
  // Pain Points
  painPoints = [
    'מרדף אחרי אורחים לאישור הגעה?',
    'בלבול עם מספרי אורחים?',
    'קושי בניהול סידורי הושבה?',
    'לחץ לפני האירוע?'
  ];
  
  // Main Features (WhatsApp RSVP focus)
  mainFeatures: Feature[] = [
    {
      icon: '🤖',
      title: 'אוטומציה בוואטסאפ',
      description: 'Eivi שולחת אישורי הגעה אוטומטיים בוואטסאפ, עוקבת אחרי תשובות ומזכירה לאורחים שלא השיבו'
    },
    {
      icon: '📊',
      title: 'דשבורד בזמן אמת',
      description: 'עקבו אחרי כל אישור הגעה בזמן אמת, ראו כמה אורחים מגיעים ותכננו בהתאם'
    },
    {
      icon: '🪑',
      title: 'סידורי הושבה חכמים',
      description: 'האלגוריתם שלנו מארגן את סידורי ההושבה בצורה אוטומטית לפי קבוצות וקשרים משפחתיים'
    }
  ];
  
  // System Functionality (Extended features)
  systemFeatures: SystemFeature[] = [
    {
      icon: '🏠',
      title: 'דף הבית',
      subtitle: 'מרכז הבקרה שלכם',
      features: [
        'סטטיסטיקות כלליות של האירוע',
        'תצוגה מהירה של אישורי הגעה',
        'ניהול משימות דחופות',
        'התראות ועדכונים בזמן אמת'
      ]
    },
    {
      icon: '🪑',
      title: 'סידורי הושבה',
      subtitle: 'אלגוריתם חכם לסידור מושלם',
      features: [
        'יצירת שולחנות וניהול מקומות',
        'הצעות אוטומטיות לסידור',
        'גרירה ושחרור למיקום ידני',
        'ייצוא ל-PDF או Excel'
      ]
    },
    {
      icon: '👥',
      title: 'ניהול מוזמנים',
      subtitle: 'כל האורחים במקום אחד',
      features: [
        'רשימת אורחים מלאה עם פילטרים',
        'ייבוא מאקסל בקליק',
        'מעקב אחר סטטוס כל אורח',
        'שליחת הודעות אישיות'
      ]
    },
    {
      icon: '✅',
      title: 'משימות',
      subtitle: 'תכנון מסודר של האירוע',
      features: [
        'רשימת משימות עם תאריכי יעד',
        'קביעת עדיפויות',
        'התראות לפני מועד',
        'שיתוף משימות עם בן/בת הזוג'
      ]
    },
    {
      icon: '⚙️',
      title: 'הגדרות אירוע',
      subtitle: 'התאמה אישית מלאה',
      features: [
        'פרטי האירוע (תאריך, מקום, שעה)',
        'הוספת שותפים לניהול',
        'התאמת הודעות אוטומטיות',
        'העדפות תצוגה ושפה'
      ]
    }
  ];
  
  // How It Works Steps
  steps: Step[] = [
    {
      number: 1,
      title: 'הרשמה',
      description: 'צרו חשבון ב-30 שניות עם Google או אימייל',
      icon: '📝'
    },
    {
      number: 2,
      title: 'העלאת רשימת אורחים',
      description: 'ייבאו רשימת אורחים מאקסל או הוסיפו ידנית',
      icon: '📋'
    },
    {
      number: 3,
      title: 'Eivi עושה את השאר',
      description: 'המערכת שולחת הודעות, עוקבת אחרי תשובות ומארגנת את ההושבה',
      icon: '✨'
    }
  ];
  
  ngOnInit(): void {
    // Smooth scroll for anchor links
    this.setupSmoothScroll();
  }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = anchor.getAttribute('href');
        if (target) {
          this.scrollToSection(target.substring(1));
        }
      });
    });
  }
  
  onCtaClick(): void {
    // Navigate to registration or contact
    console.log('CTA clicked');
    // In real implementation: this.router.navigate(['/register']);
  }
}
