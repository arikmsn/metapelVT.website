export interface Testimonial {
  name: string;
  title: string;
  initial: string;
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
  subtitle: string;
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
  subtitle: string;
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
  subtitle: string;
  items: FaqItem[];
}

export interface FooterContent {
  brandName: string;
  tagline: string;
  termsLabel: string;
  contactLabel: string;
}

export const heContent = {
  hero: {
    title: "כל תהליך הטיפול במקום אחד",
    subtitle:
      "המערכת לומדת ומייצרת עבורך סיכומי פגישות אוטומטיים, תזכורות, ניהול, הכל במקום אחד. כדי שהמטופלים שלך יקבלו ליווי מקצועי לאורך כל הדרך.",
    primaryCta: "התחילו בחינם",
    secondaryCta: "כניסת משתמשים",
  },

  forWhom: {
    title: "למי מטפל אונליין מתאים?",
    subtitle: "לכל אלו שטיפול זה המקצוע שלהם, ונפגשים בצורה קבועה עם מטופלים",
    items: [
      {
        title: "מטפלים פרטיים בגישות שונות (CBT / אומנות / ריפוי בעיסוק ועוד)",
        description:
          "עובדים בזום או בחדר טיפולים? תקבלו תמונה מסודרת של כל התהליך, בלי לחפש בפתקים.",
      },
      {
        title: "קליניקות וצוותים טיפוליים",
        description:
          "מספר מטפלים, עם הרבה מטופלים, וכל המידע מרוכז, נגיש ומעודכן במקום אחד.",
      },
      {
        title: "פסיכולוגים ופסיכותרפיסטים",
        description:
          "דינאמי, CBT, פסיכולוגיה חיובית. המערכת מתעדכנת במגמות שונות בעולם ומתאימה אותם בשבילך.",
      },
    ],
  },

  features: {
    title: "מה תרוויחו מהיום הראשון?",
    items: [
      {
        title: "הכנה חכמה לפגישות",
        description: "מגיעים מוכנים לכל פגישה",
      },
      {
        title: "סיכומים אוטומטיים",
        description: "AI מייצר סיכום מסודר תוך שניות",
      },
      {
        title: "תקשורת מסודרת",
        description: "כל ההודעות עם המטופל במקום אחד",
      },
      {
        title: "תיק מטופל מלא",
        description: "היסטוריה, פגישות, משימות ותזכורות, הכל שם.",
      },
    ],
  },

  howItWorks: {
    title: "שלושה צעדים ואתם בפנים",
    subtitle: "פחות מ-5 דקות מהרישום לפגישה ראשונה מתועדת",
    steps: [
      {
        title: "נרשמים ללא כרטיס אשראי",
        description:
          "לוחצים על \"התחילו בחינם\", יוצרים חשבון תוך דקה ומגדירים את סוג ההתמחות שלכם.",
      },
      {
        title: "מוסיפים מטופלים",
        description:
          "מגדירים זמני פגישות, ומתחילים לצבור היסטוריה טיפולית מסודרת, מהרגע הראשון.",
      },
      {
        title: "הבינה המלאכותית עובדת בשבילכם",
        description:
          "אחרי כל פגישה מזינים כמה נקודות קצרות, המערכת מייצרת סיכום מסודר, משימות ותזכורות.",
      },
    ],
    cta: "להתחיל לעבוד עם מטפל אונליין",
  },

  socialProof: {
    title: "נבנה יחד עם אנשי מקצוע מהשטח",
    subtitle:
      "מטפלים, פסיכולוגים ומנחים לקחו חלק פעיל בפיתוח, כדי שהמערכת תרגיש כמו עוזר אמיתי שמבין אותך.",
    testimonials: [
      {
        name: "יהודה בן שבת",
        title: "קואצ'ר עסקי ומנחה קבוצות",
        initial: "י",
        text: "אני מלווה עשרות אנשים במקביל. מטפל אונליין עוזר לי לזכור איפה כל אחד נמצא ומה חשוב עכשיו.",
      },
      {
        name: "ד\"ר מרים כהן",
        title: "פסיכולוגית קלינית",
        initial: "מ",
        text: "כשמטופל חוזר אחרי חודשיים, אני רואה את כל התהליך מול העיניים בתוך רגע. זה משנה את איכות המפגש.",
      },
      {
        name: "פנינה גל שורק",
        title: "מטפלת פרטית בגישה משולבת",
        initial: "פ",
        text: "סוף היום כבר לא מרגיש כמו מרתון סיכומים. כמה דקות אחרי כל פגישה והכל שמור, מאורגן וזמין לפעם הבאה.",
      },
    ],
  },

  security: {
    title: "פרטיות ואמון לפני הכל",
    subtitle:
      "מידע טיפולי הוא הדבר הרגיש ביותר שיש. בנינו את המערכת מהיסוד עם אבטחה וסודיות מלאה.",
    items: [
      {
        title: "אחסון מוצפן ומוגן",
        description:
          "כל המידע נשמר מוצפן בשרתים מאובטחים, עם הפרדה מלאה בין התיקים. רק אתם רואים את הנתונים שלכם.",
      },
      {
        title: "גיבויים אוטומטיים",
        description:
          "המערכת מבצעת גיבויים על בסיס קבוע כדי לשמור על המידע לאורך זמן.",
      },
      {
        title: "ללא שימוש שיווקי בנתונים",
        description:
          "המידע שלכם לא נמכר, לא עובר לגורם שלישי ולא משמש לפרסום. נקודה.",
      },
    ],
  },

  faq: {
    title: "שאלות נפוצות",
    subtitle: "תשובות לשאלות הכי נפוצות, לפני שתתחילו",
    items: [
      {
        question: "למי מתאימה המערכת?",
        answer:
          "לכל מי שמלווה אנשים בתהליך לאורך זמן, מטפלים, פסיכולוגים, מנחים ויועצים. אם יש לך מטופלים קבועים ויש לך רצון להפסיק לנהל הכל בראש ובפתקים, זה בשבילך.",
      },
      {
        question: "האם צריך כרטיס אשראי כדי להתחיל?",
        answer:
          "לא. נרשמים, מתחילים לעבוד, ומחליטים אם להמשיך. עד 10 מטופלים פעילים – חינם לגמרי, ללא כרטיס אשראי ובלי שום התחייבות.",
      },
      {
        question: "האם המערכת מחליפה טיפול אנושי?",
        answer:
          "ממש לא. מטפל אונליין הוא עוזר תפעולי וחכם: סיכומים, ארגון, תזכורות ורעיונות. האחריות המקצועית והקשר האנושי נשארים רק אצלך.",
      },
      {
        question: "המערכת באמת בעברית?",
        answer:
          "כן. הממשק, הסיכומים והתוכן, כולם בעברית, מתאימים לשפה ולמציאות של אנשי מקצוע בישראל.",
      },
      {
        question: "מה קורה כשמגיעים ליותר מ-10 מטופלים?",
        answer:
          "בוחרים מסלול בתשלום, באופן פשוט, ברור ומשתלם. אם לא, עוצרים בלי שום קנס ואפשר להעתיק את כל המידע. אין חוזים, אין הפתעות.",
      },
      {
        question: "איך המידע של המטופלים שלי מוגן?",
        answer:
          "הצפנה, שרתים מאובטחים, הפרדה מלאה בין חשבונות, וגיבויים אוטומטיים. הגישה מוגנת, ואפשר למחוק הכל בכל רגע. בנינו את זה לפי הסטנדרטים המחמירים ביותר.",
      },
    ],
  },

  footer: {
    brandName: "מטפל אונליין",
    tagline: "העוזר החכם למטפלים - הכנה, סיכומים ותזכורות במקום אחד. בחינם עד 10 מטופלים.",
    termsLabel: "תנאי שימוש",
    contactLabel: "צור קשר",
  },
};
