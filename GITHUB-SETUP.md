# 🚀 הוראות העלאה ל-GitHub

## מצב נוכחי ✅

הפרויקט מוכן להעלאה! הצעדים הבאים יושלמו:
- ✅ Git repository אותחל
- ✅ כל הקבצים הוספו
- ✅ Commit ראשוני בוצע
- ✅ Remote origin מוגדר ל-`https://github.com/moshe15/eivi-landing-page.git`

---

## שלבים להשלמה

### שלב 1: צור Repository ב-GitHub

1. **היכנס ל-GitHub:**
   - גש ל-https://github.com
   - התחבר עם המשתמש `moshe15`

2. **צור Repository חדש:**
   - לחץ על הכפתור הירוק **"New"** או **"+"** בפינה הימנית העליונה
   - או גש ישירות ל: https://github.com/new

3. **הגדרות Repository:**
   - **Repository name:** `eivi-landing-page`
   - **Description:** "Professional Landing Page Module for Eivi - AI-powered Wedding RSVP System"
   - **Visibility:** בחר **Public** או **Private** (לפי העדפתך)
   - **⚠️ חשוב:** **אל תסמן** את האופציות:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
   
   (כי הקבצים האלה כבר קיימים בפרויקט)

4. **צור את הריפו:**
   - לחץ על **"Create repository"**

---

### שלב 2: העלה את הקוד

#### אופציה A: דרך PowerShell (מומלץ)

פתח PowerShell והרץ:

```powershell
cd C:\Users\User2\eivi-landing-page
git push -u origin main
```

**אם תתבקש לאימות:**
- GitHub ישאל אותך להתחבר
- השתמש בפרטי הכניסה שלך או Personal Access Token

---

#### אופציה B: אם יש בעיית אימות

אם אתה מקבל שגיאת authentication, תצטרך ליצור Personal Access Token:

1. **ב-GitHub:**
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token (classic)
   - בחר scope: `repo` (Full control of private repositories)
   - העתק את ה-Token (תוכל לראות אותו רק פעם אחת!)

2. **ב-PowerShell:**
```powershell
cd C:\Users\User2\eivi-landing-page

# החלף YOUR_TOKEN_HERE ב-token שקיבלת
git remote set-url origin https://YOUR_TOKEN_HERE@github.com/moshe15/eivi-landing-page.git

git push -u origin main
```

---

### שלב 3: וידוא

אחרי ה-push, גש ל:
```
https://github.com/moshe15/eivi-landing-page
```

תראה:
- ✅ 28 קבצים
- ✅ README.md
- ✅ תיקיית `landing-module`
- ✅ Commit message: "feat: Initial commit - Eivi Landing Page Module..."

---

## 📂 מבנה הפרויקט ב-GitHub

```
eivi-landing-page/
├── README.md                    # מדריך כללי
├── INTEGRATION-GUIDE.md         # מדריך שילוב בפרויקט קיים
├── GITHUB-SETUP.md             # המסמך הזה
├── .gitignore
└── landing-module/
    ├── components/              # כל הקומפוננטות (5 דפים + shared)
    ├── styles/                  # SCSS variables & mixins
    ├── assets/                  # תמונות ומדיה
    ├── landing.module.ts        # Angular module
    └── landing-routing.module.ts # Routing configuration
```

---

## 🔄 עבודה עתידית

### Clone הפרויקט במחשב אחר:

```bash
git clone https://github.com/moshe15/eivi-landing-page.git
cd eivi-landing-page
```

### עדכונים עתידיים:

```bash
# עשה שינויים בקבצים...

git add .
git commit -m "הסבר על השינוי"
git push
```

---

## 🎯 שלבים הבאים

1. ✅ **העלה ל-GitHub** (לפי ההוראות למעלה)
2. **שלב בפרויקט הקיים:**
   - עקוב אחרי `INTEGRATION-GUIDE.md`
   - העתק את `landing-module` לפרויקט Angular הקיים
   - עדכן את ה-routing
3. **בדיקה מקומית:**
   - `npm start`
   - גש ל-`http://localhost:4200/landing`
4. **פריסה לפרודקשן:**
   - Build: `npm run build`
   - Deploy ל-Vercel/Netlify
   - עדכן DNS של `eivi.co.il`

---

## ❓ שאלות נפוצות

### Q: לא הצלחתי לעשות push
**A:** בדוק:
1. האם הריפו נוצר ב-GitHub?
2. האם השם של הריפו זהה? (`eivi-landing-page`)
3. האם יש לך הרשאות push?

### Q: Repository כבר קיים
**A:** אם הריפו כבר קיים עם קבצים:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Q: רוצה לשנות את שם ה-branch
**A:**
```bash
git branch -M new-branch-name
git push -u origin new-branch-name
```

---

## 🎉 מוכן!

כל הקוד מוכן והמוקד מאורגן. רק להעלות ל-GitHub ואפשר להתחיל לשלב בפרויקט!

**Good Luck! 🚀**

---

**נוצר בתאריך:** 17 פברואר 2026  
**Project:** Eivi Landing Page Module  
**Purpose:** Meta Business Verification
