export interface Testimonial {
  role: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ForWhomItem {
  title: string;
  description: string;
}

export interface ForWhomContent {
  title: string;
  items: ForWhomItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesContent {
  title: string;
  items: FeatureItem[];
}

export interface StepItem {
  title: string;
  description: string;
}

export interface HowItWorksContent {
  title: string;
  steps: StepItem[];
  cta: string;
}

export interface SocialProofContent {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface SecurityItem {
  title: string;
  description: string;
}

export interface SecurityContent {
  title: string;
  subtitle: string;
  items: SecurityItem[];
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
  contactText: string;
  cta: string;
}

export interface FooterContent {
  brandName: string;
  termsLabel: string;
  contactLabel: string;
}

export const heContent = {
  hero: {
    title: "העוזר הדיגיטלי שלך לניהול קליניקה",
    subtitle: "סיכומי פגישות, משימות ותזכורות – כל מה שצריך במקום אחד, בקלות ובמהירות אחרי כל סשן.",
    primaryCta: "כניסה למערכת",
    secondaryCta: "הצטרפות לפיילוט חינמי",
  },
  forWhom: {
    title: "למי זה מתאים?",
    items: [
      {
        title: "מטפלים שרוצים סדר בסיכומים",
        description: "סיכומים מסודרים ונגישים לכל פגישה, בלחיצת כפתור",
      },
      {
        title: "מטפלים שמנהלים קליניקה לבד",
        description: "פחות עבודה אדמיניסטרטיבית ויותר זמן להתמקד בטיפול",
      },
      {
        title: "קליניקות פרטיות",
        description: "מעקב רציף אחרי התקדמות הטיפול של כל מטופל",
      },
    ],
  },
  features: {
    title: "מה המערכת עושה בשבילך ביום-יום?",
    items: [
      {
        title: "עזרה בסיכומי פגישות",
        description: "הקלטה או תמלול קצר – וMetapel יוצרת סיכום מסודר",
      },
      {
        title: "הכנה לפגישות",
        description: "סיכום פגישות קודמות ורעיונות להמשך הטיפול",
      },
      {
        title: "רשימת משימות",
        description: "מעקב אחרי משימות לכל מטופל ותזכורות חכמות",
      },
      {
        title: "יומן פגישות",
        description: "ניהול סדר העבודה והתמקדות בדברים החשובים",
      },
    ],
  },
  howItWorks: {
    title: "איך זה עובד?",
    steps: [
      {
        title: "יוצרים חשבון",
        description: "מגדירים כמה פרטים על הקליניקה ומתחילים לעבוד",
      },
      {
        title: "מזינים אחרי כל פגישה",
        description: "כמה נקודות מפתח או תמלול קצר של הסשן",
      },
      {
        title: "Metapel עובדת בשבילכם",
        description: "מסכמת, שומרת ומזכירה לכם מה חשוב לפגישה הבאה",
      },
    ],
    cta: "להתחיל עכשיו",
  },
  socialProof: {
    title: "פותח יחד עם מטפלים מהשטח",
    subtitle: "המערכת נבנתה בשיתוף עם מטפלים פעילים, כדי לענות על הצרכים האמיתיים של קליניקה יומיומית.",
    testimonials: [
      {
        role: "מטפלת פרטית, CBT",
        text: "Metapel חסכה לי שעות של עבודה אדמיניסטרטיבית בכל שבוע. אני יכולה להתמקד במה שבאמת חשוב – הטיפול עצמו.",
      },
      {
        role: "פסיכולוג קליני",
        text: "המערכת עוזרת לי לשמור על רצף טיפולי גם עם מטופלים שאני רואה רק פעם בשבוע. זה משנה את הדרך שבה אני עובד.",
      },
      {
        role: "מטפלת בגישה דינמית",
        text: "פשוט, יעיל ומותאם לעברית. בדיוק מה שחיפשתי לניהול הקליניקה שלי.",
      },
    ],
  },
  security: {
    title: "פרטיות המטופלים לפני הכול",
    subtitle: "אנחנו מבינים שמידע טיפולי הוא רגיש במיוחד. לכן המערכת תוכננה מתוך מחשבה על פרטיות ואבטחת מידע.",
    items: [
      {
        title: "נתונים מאובטחים בענן",
        description: "כל המידע מאוחסן בשרתים מאובטחים, ללא פרטים מזהים בהודעות",
      },
      {
        title: "שליטה מלאה בנתונים",
        description: "אפשרות למחוק או לייצא מידע על מטופל בכל רגע, לפי הצורך",
      },
      {
        title: "ללא שימוש שיווקי",
        description: "המידע שלכם נשאר שלכם – אנחנו לא משתמשים בו לצרכים שיווקיים או פרסום",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    contactText: "יש עוד שאלות? נשמח לשמוע",
    cta: "צור קשר",
    items: [
      {
        question: "אפשר להתחיל בלי התחייבות?",
        answer: "כן. אנחנו מציעים תקופת פיילוט חינמית כדי שתוכלו להתנסות במערכת ולראות איך היא מתאימה לעבודה שלכם. אין התחייבות, ואפשר לעזוב בכל רגע.",
      },
      {
        question: "האם המערכת מחליפה טיפול אנושי?",
        answer: "לא. Metapel היא כלי תומך למטפל, לא תחליף. היא עוזרת לנהל את הקליניקה בצורה מסודרת יותר, אבל כל ההחלטות הטיפוליות נשארות באחריותכם המקצועית.",
      },
      {
        question: "אפשר לעבוד בעברית?",
        answer: "כן. הממשק כולו בעברית, כולל הסיכומים והתוכן שהמערכת מייצרת. המערכת מותאמת במיוחד לעבודה עם מטפלים ישראלים.",
      },
      {
        question: "מה קורה אחרי תקופת הפיילוט?",
        answer: "אחרי תקופת הפיילוט תוכלו לבחור במסלול תשלום פשוט שמתאים לכם. גם אם תחליטו שזה לא מתאים – אפשר לעזוב בכל רגע, בלי קנסות או התחייבויות.",
      },
      {
        question: "איך המידע מאובטח?",
        answer: "אנחנו משתמשים בהצפנה מתקדמת ושרתים מאובטחים. המידע נשמר בהתאם לסטנדרטים מקובלים של רשויות הפרטיות, ואפשר למחוק אותו בכל רגע.",
      },
    ],
  },
  footer: {
    brandName: "Metapel",
    termsLabel: "תנאי שימוש",
    contactLabel: "צור קשר",
  },
};
