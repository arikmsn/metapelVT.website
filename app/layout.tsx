import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metapel - העוזר הדיגיטלי שלך לניהול קליניקה",
  description: "סיכומי פגישות, משימות ותזכורות למטפלים - במקום אחד מסודר",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
