import type { Metadata } from "next";
import "./globals.css";

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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
