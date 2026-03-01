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
    title: "כל תהליך הטיפול במקום אחד",
    subtitle:
      "המערכת עוקבת אחרי כל פגישה, משימה ותזכורת, כדי שהמטופלים והמתאמנים שלך יקבלו ליווי מקצועי ומסודר לאורך כל הדרך.",
    primaryCta: "כניסה למערכת",
    secondaryCta: "הצטרפות לפיילוט חינם",
  },

  forWhom: {
    title: "למי מטפל אונליין מתאים?",
    items: [
      {
        title: "מטפלים פרטיים",
        description:
          "מי שעובדים אחד על אחד, בזום או בחדר טיפולים, ורוצים תמונה מסודרת של כל התהליך.",
      },
      {
        title: "קליניקות וצוותים טיפוליים",
        description:
          "מספר מטפלים, עם הרבה מטופלים, וכל המידע מרוכז, נגיש ומעודכן במקום אחד.",
      },
      {
        title: "קואצ'רים, מנחים ויועצים",
        description:
          "ליווי אישי או קבוצתי, מעקב ברור אחרי כל תהליך, מבלי להסתמך על הזיכרון.",
      },
    ],
  },

  features: {
    title: "מה מטפל אונליין עושה בשבילך ביום‑יום?",
    items: [
      {
        title: "סיכומי פגישות חכמים",
        description:
          "אחרי כל מפגש מוסיפים בקצרה תמלול, הקלטה או כמה נקודות חשובות, והמערכת מייצרת סיכום ברור ומסודר.",
      },
      {
        title: "הכנה לפגישה הבאה",
        description:
          "לפני כל מפגש עוברים את עיקרי הדברים, מה הוחלט, מה הוטל כמשימה, וכך מגיעים ממוקדים ומוכנים.",
      },
      {
        title: "משימות ותזכורות לכל תהליך",
        description:
          "רשימת משימות לכל מטופל או מתאמן, ותזכורות חכמות שיעזרו לך לא לשכוח מה חשוב להמשך.",
      },
      {
        title: "תמונה מלאה לאורך זמן",
        description:
          "היסטוריית פגישות, התקדמות, נקודות מפנה ותובנות, הכל על ציר הזמן, בפשטות.",
      },
    ],
  },

  howItWorks: {
    title: "איך זה עובד בפועל?",
    steps: [
      {
        title: "נרשמים ומגדירים את אופי העבודה",
        description:
          "מטפל, קליניקה, קואצ'ר או מנחה – בוחרים איך אתה עובד ומי האנשים שאתה מלווה.",
      },
      {
        title: "מוסיפים בקצרה אחרי כל פגישה",
        description:
          "תוך פחות מדקה מזינים תמלול קצר, הקלטה או נקודות מפתח – בלי לכתוב דוחות ארוכים.",
      },
      {
        title: "המערכת מסכמת ומזכירה עבורך",
        description:
          "מטפל אונליין מסדרת את המידע, יוצרת סיכום, משימות ותזכורות – ואתה פנוי להיות עם האדם שמולך.",
      },
    ],
    cta: "להתחיל לעבוד עם מטפל אונליין",
  },

  socialProof: {
    title: "נבנה יחד עם אנשי מקצוע מהשטח",
    subtitle:
      "מטפלים, קואצ'רים ומנחים לקחו חלק בפיתוח, כדי שהמערכת תהיה חלק טבעי מהעבודה, לא עוד תוספת כבדה שמפריעה.",
    testimonials: [
      {
        role: "מטפלת פרטית בגישה משולבת",
        text: "סוף היום כבר לא מרגיש כמו מרתון סיכומים. כמה דקות אחרי כל פגישה והכל שמור, מאורגן וזמין לפעם הבאה.",
      },
      {
        role: "פסיכולוג קליני",
        text: "כשמטופל חוזר אחרי חודשיים, אני רואה את כל התהליך מול העיניים בתוך רגע. זה משנה את איכות המפגש.",
      },
      {
        role: "קואצ'ר עסקי ומנחה קבוצות",
        text: "אני מלווה עשרות אנשים במקביל. מטפל אונליין עוזר לי לזכור איפה כל אחד נמצא ומה חשוב עכשיו.",
      },
    ],
  },

  security: {
    title: "פרטיות ואמון לפני הכל",
    subtitle:
      "מידע טיפולי ואימוני הוא אחד הדברים הרגישים ביותר. מטפל אונליין נבנה מראש מתוך מחשבה על אבטחה וסודיות.",
    items: [
      {
        title: "אחסון מוצפן ומוגן",
        description:
          "כל המידע נשמר בצורה מוצפנת בשרתים מאובטחים, עם הפרדה בין תוכן הפגישות לבין פרטים מזהים.",
      },
      {
        title: "שליטה מלאה במידע",
        description:
          "תוכל בכל רגע למחוק, לערוך או לייצא מידע על מטופל, מתאמן או קבוצה – לפי מה שנכון לך.",
      },
      {
        title: "ללא שימוש שיווקי בנתונים",
        description:
          "המידע במערכת לא משמש לפרסום, שיווק או מכירה. הוא נשאר בינך לבין האנשים שאתה מלווה.",
      },
    ],
  },

  faq: {
    title: "שאלות נפוצות",
    contactText: "יש עוד משהו שלא ברור? נשמח לשמוע ממך.",
    cta: "צור קשר",
    items: [
      {
        question: "זה מתאים רק לקליניקות?",
        answer:
          "לא. מטפל אונליין מתאים למטפלים פרטיים, לקליניקות, לקואצ'רים, למנחים ויועצים – לכל מי שמלווה אנשים בתהליך לאורך זמן.",
      },
      {
        question: "יש התחייבות או סיכון?",
        answer:
          "לא. אפשר להתחיל בתקופת פיילוט חינמית, לבדוק איך זה מרגיש בעבודה היומיומית, ולהחליט אם להמשיך. ניתן לעזוב בכל רגע, בלי קנסות.",
      },
      {
        question: "האם המערכת מחליפה טיפול אנושי?",
        answer:
          "ממש לא. מטפל אונליין הוא עוזר תפעולי וחכם: סיכומים, ארגון, תזכורות ורעיונות. האחריות המקצועית והקשר האנושי נשארים רק אצלך.",
      },
      {
        question: "המערכת באמת מתאימה לעברית?",
        answer:
          "כן. הממשק, הסיכומים והתוכן – כולם בעברית, מותאמים לשפה ולמציאות של אנשי מקצוע בישראל.",
      },
      {
        question: "מה קורה אחרי תקופת הפיילוט?",
        answer:
          "אם מתאים לך להמשיך, בוחרים מסלול חודשי פשוט לפי היקף העבודה. אם לא – מפסיקים בלי התחייבות, וניתן למחוק את כל המידע מהמערכת.",
      },
      {
        question: "איך אתם שומרים על המידע?",
        answer:
          "אנחנו משתמשים בהצפנה וסטנדרטים מקובלים לאבטחת מידע. הגישה לחשבון מוגנת, ותמיד ניתן למחוק נתונים לחלוטין אם תרצה.",
      },
    ],
  },

  footer: {
    brandName: "מטפל אונליין",
    termsLabel: "תנאי שימוש",
    contactLabel: "הצטרפות לפיילוט חינם",
  },
};
