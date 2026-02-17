# 🔧 מדריך שילוב - Eivi Landing Page Module

## תוכן עניינים
1. [שלבי השילוב](#שלבי-השילוב)
2. [עדכון app-routing.module.ts](#עדכון-routing)
3. [בדיקה מקומית](#בדיקה-מקומית)
4. [פריסה לפרודקשן](#פריסה-לפרודקשן)
5. [פתרון בעיות](#פתרון-בעיות)

---

## 📦 שלבי השילוב

### שלב 1: העתקת המודול לפרויקט

העתק את התיקיה `landing-module` לפרויקט ה-Angular הקיים שלך:

```powershell
# מהתיקיה C:\Users\User2\eivi-landing-page

# יצירת תיקיית יעד (אם לא קיימת)
mkdir C:\Users\User2\my-project-bot\my-bot-frontend\src\app\features\landing-pages-eivi

# העתקת כל הקבצים
xcopy /E /I /Y landing-module C:\Users\User2\my-project-bot\my-bot-frontend\src\app\features\landing-pages-eivi
```

**או בצורה ידנית:**
1. פתח את `C:\Users\User2\eivi-landing-page\landing-module`
2. העתק את כל התיקיות והקבצים
3. הדבק ב-`C:\Users\User2\my-project-bot\my-bot-frontend\src\app\features\landing-pages-eivi`

---

### שלב 2: עדכון Routing הראשי

עדכן את `app-routing.module.ts` או `app.routes.ts` (תלוי בגרסת Angular):

#### אופציה A: אם יש לך `app-routing.module.ts`

```typescript
// C:\Users\User2\my-project-bot\my-bot-frontend\src\app\app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ... הקודם routes קיימים ...
  
  // הוסף את זה בסוף:
  {
    path: 'landing',
    loadChildren: () => import('./features/landing-pages-eivi/landing.module')
      .then(m => m.LandingModule)
  },
  
  // אופציונלי - אם רוצים שהדף יהיה גם ב-root:
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### אופציה B: אם יש לך `app.routes.ts` (Angular standalone)

```typescript
// C:\Users\User2\my-project-bot\my-bot-frontend\src\app\app.routes.ts

import { Routes } from '@angular/router';

export const routes: Routes = [
  // ... routes קיימים ...
  
  {
    path: 'landing',
    loadChildren: () => import('./features/landing-pages-eivi/landing.module')
      .then(m => m.LandingModule)
  }
];
```

---

### שלב 3: עדכון SCSS Imports (אופציונלי)

אם יש לך קובץ `styles.scss` גלובלי:

```scss
// C:\Users\User2\my-project-bot\my-bot-frontend\src\styles.scss

// ייבוא גופנים בעברית (אם טרם מיובאים)
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&family=Assistant:wght@300;400;500;600;700&display=swap');

// ... שאר ה-styles שלך ...
```

---

## 🧪 בדיקה מקומית

### 1. הפעל את שרת הפיתוח

```bash
cd C:\Users\User2\my-project-bot\my-bot-frontend
npm start
```

### 2. גש לכתובת

פתח דפדפן וגש ל:
```
http://localhost:4200/landing
```

### 3. בדוק את כל הדפים

- ✅ דף הבית: `http://localhost:4200/landing`
- ✅ אודות: `http://localhost:4200/landing/about`
- ✅ צור קשר: `http://localhost:4200/landing/contact`
- ✅ מדיניות פרטיות: `http://localhost:4200/landing/privacy`
- ✅ תנאי שימוש: `http://localhost:4200/landing/terms`

### 4. וודא שהפוטר מופיע בכל דף

בדוק שהטקסט המשפטי הזה מופיע בכל דף:
> "Eivi is a brand operated by Omer Harush, Licensed Dealer Number 308490994. All rights reserved 2026."

---

## 🚀 פריסה לפרודקשן

### שלב 1: Build Production

```bash
cd C:\Users\User2\my-project-bot\my-bot-frontend
npm run build
```

### שלב 2: העלאה ל-Vercel/Netlify

#### Vercel:
```bash
# התקנת CLI (פעם אחת)
npm install -g vercel

# פריסה
cd C:\Users\User2\my-project-bot\my-bot-frontend
vercel --prod
```

#### Netlify:
```bash
# התקנת CLI (פעם אחת)
npm install -g netlify-cli

# פריסה
cd C:\Users\User2\my-project-bot\my-bot-frontend
netlify deploy --prod --dir=dist/my-bot-frontend
```

### שלב 3: עדכון DNS

עדכן את הרשומות DNS של `eivi.co.il` להצביע לשרת החדש.

---

## 🔧 התאמות נוספות

### שינוי צבעים

ערוך את הקובץ:
```
landing-pages-eivi/styles/_variables.scss
```

שנה את המשתנים:
```scss
$color-secondary: #d4af37;  // זהב
$color-accent: #8fa088;     // ירוק מרווה
```

### שינוי טקסטים

כל הטקסטים נמצאים ב-TypeScript files של כל קומפוננטה:
- `landing-home.component.ts`
- `about.component.ts`
- `contact.component.ts`
- וכו'

### הוספת לוגו

1. העתק את קובץ הלוגו ל:
```
landing-pages-eivi/assets/images/logo.svg
```

2. עדכן את `header.component.html`:
```html
<img src="assets/images/logo.svg" alt="Eivi Logo" class="logo-image">
```

---

## 🐛 פתרון בעיות

### בעיה: "Cannot find module 'landing.module'"

**פתרון:**
וודא שהנתיב ב-`app-routing.module.ts` תואם לנתיב האמיתי:
```typescript
loadChildren: () => import('./features/landing-pages-eivi/landing.module')
```

### בעיה: "CommonModule not found"

**פתרון:**
וודא ש-Angular מותקן כראוי:
```bash
npm install
```

### בעיה: SCSS לא נטען

**פתרון:**
וודא ש-`angular.json` מכיל:
```json
{
  "projects": {
    "my-bot-frontend": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.scss"
            ]
          }
        }
      }
    }
  }
}
```

### בעיה: הפוטר לא מופיע

**פתרון:**
וודא ש-`<app-footer></app-footer>` מופיע בכל קומפוננטה HTML.

---

## 📞 תמיכה נוספת

אם נתקלתם בבעיות, צרו קשר:
- **Email:** info@eivi.co.il
- **GitHub Issues:** הקימו issue בריפו

---

## ✅ Checklist סופי

לפני העלאה לפרודקשן, וודאו:

- [ ] כל 5 הדפים עובדים
- [ ] הפוטר המשפטי מופיע בכל דף
- [ ] הקישורים בין הדפים עובדים
- [ ] העיצוב רספונסיבי (בדוק במובייל)
- [ ] הטופס צור קשר עובד
- [ ] אין שגיאות בקונסול
- [ ] Build production עובר בהצלחה
- [ ] הדומיין eivi.co.il מצביע לאתר

---

**מודול דף הנחיתה מוכן לפרודקשן! 🎉**

---

## 📄 נספחים

### נספח A: מבנה הקבצים המלא

```
landing-pages-eivi/
├── components/
│   ├── landing-home/
│   │   ├── landing-home.component.ts
│   │   ├── landing-home.component.html
│   │   └── landing-home.component.scss
│   ├── about/
│   │   ├── about.component.ts
│   │   ├── about.component.html
│   │   └── about.component.scss
│   ├── contact/
│   │   ├── contact.component.ts
│   │   ├── contact.component.html
│   │   └── contact.component.scss
│   ├── privacy-policy/
│   │   ├── privacy-policy.component.ts
│   │   ├── privacy-policy.component.html
│   │   └── privacy-policy.component.scss
│   ├── terms-of-service/
│   │   ├── terms-of-service.component.ts
│   │   ├── terms-of-service.component.html
│   │   └── terms-of-service.component.scss
│   └── shared/
│       ├── footer/
│       │   ├── footer.component.ts
│       │   ├── footer.component.html
│       │   └── footer.component.scss
│       └── header/
│           ├── header.component.ts
│           ├── header.component.html
│           └── header.component.scss
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── landing-global.scss
├── assets/
│   └── images/
├── landing.module.ts
└── landing-routing.module.ts
```

### נספח B: דרישות Meta Business Verification

✅ **עמידה בדרישות:**
1. מינימום 5 דפים נפרדים - ✓
2. תוכן עשיר (5+ סקשנים בדף הבית) - ✓
3. פוטר חוקי עם פרטי העסק - ✓
4. קישורים עובדים בין דפים - ✓
5. עיצוב מקצועי ורספונסיבי - ✓

---

**Good Luck! 🚀**
