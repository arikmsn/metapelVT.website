import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ScrollAnimation from "@/components/ScrollAnimation";
import Script from "next/script";

const softwareAppSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "מטפל אונליין",
  "alternateName": "Metapel Online",
  "url": "https://metapel.online",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "ILS",
    "description": "Free Pilot Program"
  },
  "description": "AI-powered clinical management system for therapists, coaches, and counselors. Focuses on session summaries, preparation, and patient tracking.",
  "inLanguage": "he"
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "למי מתאימה המערכת?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "מטפל אונליין מתאימה למטפלים, לקואצ'רים, למנחים ויועצים, לכל מי שמלווה אנשים בתהליך לאורך זמן וזקוק למערכת תומכת בפעילות יום יומית."
      }
    },
    {
      "@type": "Question",
      "name": "יש התחייבות או סיכון?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "לא. אפשר להתחיל בתקופת פיילוט חינמית, לבדוק איך זה מרגיש בעבודה היומיומית, ולהחליט אם להמשיך. ניתן לעזוב בכל רגע, בלי קנסות."
      }
    },
    {
      "@type": "Question",
      "name": "האם המערכת מחליפה טיפול אנושי?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ממש לא. מטפל אונליין הוא עוזר תפעולי וחכם: סיכומים, ארגון, תזכורות ורעיונות. האחריות המקצועית והקשר האנושי נשארים רק אצלך."
      }
    },
    {
      "@type": "Question",
      "name": "המערכת באמת מתאימה לעברית?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "כן. הממשק, הסיכומים והתוכן – כולם בעברית, מותאמים לשפה ולמציאות של אנשי מקצוע בישראל."
      }
    },
    {
      "@type": "Question",
      "name": "מה קורה אחרי תקופת הפיילוט?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "בוחרים מסלול בתשלום חודשי באופן פשוט, ברור ומשתלם. אם לא, מפסיקים בלי התחייבות, וניתן למחוק את כל המידע מהמערכת."
      }
    },
    {
      "@type": "Question",
      "name": "איך אתם שומרים על המידע?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "אנחנו משתמשים בהצפנה וסטנדרטים מקובלים לאבטחת מידע. הגישה לחשבון מוגנת, ותמיד ניתן למחוק נתונים לחלוטין אם תרצה."
      }
    }
  ]
});

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "מטפל אונליין",
  "url": "https://metapel.online",
  "logo": "https://metapel.online/Brand/Logo.png",
  "description": "AI-powered clinical management system for therapists, coaches, and counselors."
});

export const metadata: Metadata = {
  title: "מטפל אונליין – העוזר החכם למטפלים ולמלווי תהליכים",
  description: "מערכת בינה מלאכותית שעוזרת לך ללוות מטופלים ומתאמנים ביום‑יום: סיכומי פגישות, משימות ותזכורות – בלי ללכת לאיבוד בין כל התהליכים.",
  openGraph: {
    title: "מטפל אונליין – העוזר החכם למטפלים ולמלווי תהליכים",
    description: "מערכת בינה מלאכותית שעוזרת לך ללוות מטופלים ומתאמנים ביום‑יום: סיכומי פגישות, משימות ותזכורות – בלי ללכת לאיבוד בין כל התהליכים.",
    url: "https://www.metapel.online/",
    siteName: "מטפל אונליין",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "מטפל אונליין – העוזר החכם למטפלים ולמלווי תהליכים",
    description: "מערכת בינה מלאכותית שעוזרת לך ללוות מטופלים ומתאמנים ביום‑יום: סיכומי פגישות, משימות ותזכורות",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Brand/LogoSignV1.png",
    apple: "/Brand/LogoSignV1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="canonical" href="https://www.metapel.online/" />
        <link rel="icon" type="image/png" href="/Brand/LogoSignV1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: softwareAppSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchema }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8232FZW1X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8232FZW1X');
            function gtagSendEvent(target) {
              var callback = function() {
                if (target) window.location.hash = target;
              };
              gtag('event', 'lead_submitted', {
                'event_callback': callback,
                'event_timeout': 2000,
                'value': 100,
                'currency': 'ILS',
                'lead_source': 'Metapel Online (web)',
                'form_id': 'contact-form'
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className="antialiased">
        <ScrollAnimation />
        <Header />
        {children}
      </body>
    </html>
  );
}
