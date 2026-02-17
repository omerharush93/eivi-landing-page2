# 🎊 Eivi Landing Page Module
## דף נחיתה מקיף למערכת אישורי הגעה חכמים

---

## 📋 תיאור כללי

מודול Angular מקצועי ועצמאי של דף נחיתה עבור **Eivi** - מערכת אוטומציה מבוססת בינה מלאכותית לניהול אישורי הגעה ותכנון אירועים בוואטסאפ.

**נוצר למען:** אימות Meta Business Verification  
**דומיין:** eivi.co.il  
**ישות משפטית:** עומר חרוש (עוסק מורשה) - מס' רישיון 308490994

---

## ✨ תכונות המודול

### 📄 חמישה דפים מלאים:
1. **דף הבית** - `LandingHomeComponent` (path: `''`)
2. **אודות** - `AboutComponent` (path: `about`)
3. **צור קשר** - `ContactComponent` (path: `contact`)
4. **מדיניות פרטיות** - `PrivacyPolicyComponent` (path: `privacy`)
5. **תנאי שימוש** - `TermsOfServiceComponent` (path: `terms`)

### 🎨 עיצוב:
- **ערכת צבעים:** לבנים, קרמים, זהב עדין וירוק מרווה (wedding theme)
- **Mobile-First:** רספונסיבי מלא
- **RTL:** תמיכה מלאה בעברית
- **SCSS:** מודולרי ונקי

### 🔐 Footer חוקי (CRITICAL):
> **"Eivi is a brand operated by Omer Harush, Licensed Dealer Number 308490994. All rights reserved 2026."**

הפוטר מופיע בכל 5 הדפים עם קישורים לכל העמודים האחרים.

---

## 🏗️ מבנה הפרויקט

```
eivi-landing-page/
├── landing-module/
│   ├── components/
│   │   ├── landing-home/
│   │   │   ├── landing-home.component.ts
│   │   │   ├── landing-home.component.html
│   │   │   └── landing-home.component.scss
│   │   ├── about/
│   │   │   ├── about.component.ts
│   │   │   ├── about.component.html
│   │   │   └── about.component.scss
│   │   ├── contact/
│   │   │   ├── contact.component.ts
│   │   │   ├── contact.component.html
│   │   │   └── contact.component.scss
│   │   ├── privacy-policy/
│   │   │   ├── privacy-policy.component.ts
│   │   │   ├── privacy-policy.component.html
│   │   │   └── privacy-policy.component.scss
│   │   ├── terms-of-service/
│   │   │   ├── terms-of-service.component.ts
│   │   │   ├── terms-of-service.component.html
│   │   │   └── terms-of-service.component.scss
│   │   └── shared/
│   │       ├── footer/
│   │       │   ├── footer.component.ts
│   │       │   ├── footer.component.html
│   │       │   └── footer.component.scss
│   │       └── header/
│   │           ├── header.component.ts
│   │           ├── header.component.html
│   │           └── header.component.scss
│   ├── services/
│   ├── assets/
│   │   └── images/
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── landing-global.scss
│   ├── landing.module.ts
│   └── landing-routing.module.ts
├── README.md
└── INTEGRATION-GUIDE.md
```

---

## 🚀 התקנה ושילוב

### שלב 1: העתק את התיקיה
```bash
cp -r C:\Users\User2\eivi-landing-page\landing-module \
      C:\Users\User2\my-project-bot\my-bot-frontend\src\app\features\landing-pages-new
```

### שלב 2: עדכן את app-routing.module.ts
```typescript
// הוסף את השורה הזו למערך routes:
{
  path: 'landing',
  loadChildren: () => import('./features/landing-pages-new/landing.module')
    .then(m => m.LandingModule)
}
```

### שלב 3: הפעל את השרת
```bash
cd my-bot-frontend
npm start
```

גש ל-`http://localhost:4200/landing`

---

## 📝 תוכן דף הבית (5 סקשנים)

### 1️⃣ Hero Section
- **כותרת ראשית:** "Eivi - אישורי הגעה בראש שקט"
- **כותרת משנה:** "הבינה המלאכותית שתארגן לכם את החתונה"
- **CTA:** "התחל עכשיו"

### 2️⃣ Pain Point Section
הסבר על הקושי בניהול ידני של אישורי הגעה - לחץ, מרדף אחרי אורחים, בלבול.

### 3️⃣ Solution/Features Section
- 🤖 **אוטומציה בוואטסאפ**
- 📊 **דשבורד בזמן אמת**
- 🪑 **סידורי הושבה חכמים**
- 👥 **ניהול מוזמנים**
- ✅ **משימות וריכוז**
- ⚙️ **הגדרות אירוע**

### 4️⃣ How It Works
1. **הרשמה** - צור חשבון ב-30 שניות
2. **העלאת רשימת אורחים** - ייבא מאקסל או הוסף ידני
3. **Eivi עושה את השאר** - אוטומציה מלאה

### 5️⃣ Trust/Footer Section
פוטר מקצועי עם קישורים משפטיים.

---

## 🎨 ערכת עיצוב

### צבעים עיקריים:
```scss
$color-primary: #f5f5f0;      // קרם עדין
$color-secondary: #d4af37;    // זהב רך
$color-accent: #8fa088;       // ירוק מרווה
$color-text-dark: #333333;    
$color-text-light: #ffffff;   
$color-bg: #ffffff;           
$color-bg-alt: #fdfcf8;       // רקע חלופי
```

### טיפוגרפיה:
- **Headers:** Heebo, sans-serif
- **Body:** Assistant, sans-serif

---

## ✅ Requirements Compliance (Meta Verification)

✔️ **5 דפים נפרדים** עם routes משלהם  
✔️ **תוכן עשיר** - מינימום 5 סקשנים בדף הבית  
✔️ **פוטר חוקי** - מופיע בכל דף עם הטקסט המשפטי המדויק  
✔️ **קישורים עובדים** - בין כל הדפים  
✔️ **עיצוב מקצועי** - מותאם למובייל  

---

## 📦 תלויות

כל התלויות כבר קיימות בפרויקט:
- Angular 19.2+
- SCSS
- RxJS
- Angular Router

**אין צורך להתקין חבילות נוספות!**

---

## 🌐 Git & Deployment

### יצירת Branch חדש:
```bash
cd C:\Users\User2\eivi-landing-page
git init
git remote add origin https://github.com/moshe15/eivi-landing-page.git
git add .
git commit -m "Initial commit: Eivi landing page module"
git branch -M main
git push -u origin main
```

---

## 📞 תמיכה

**Developed by:** Eivi Team  
**Contact:** info@eivi.co.il  
**Legal Entity:** Omer Harush, License #308490994

---

**🎉 דף הנחיתה שלך מוכן לפרודקשן!**
