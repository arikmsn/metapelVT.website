import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "הצהרת נגישות – Metapel Online",
  description:
    "הצהרת הנגישות של Metapel Online – מידע על הנגשת האתר, אפשרויות הנגישות הזמינות, ופרטי יצירת קשר לנושאי נגישות.",
};

export default function AccessibilityPage() {
  return (
    <>
      <main className="min-h-screen bg-surface pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              ← חזרה לדף הבית
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10 leading-tight">
            הצהרת נגישות – Metapel Online
          </h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">

            <p>
              אתר Metapel Online שואף לספק חוויית שימוש נגישה ככל האפשר עבור כלל הגולשים, ובכלל זה אנשים עם מוגבלויות, בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות והתקנות הנלוות לו.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-4">מה נעשה באתר לצורך נגישות</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>מבנה אתר פשוט והיררכיית כותרות ברורה.</li>
                <li>התאמת צבעים וקונטרסט במטרה לשפר קריאות.</li>
                <li>אפשרות להגדלת טקסט, שינוי קונטרסט והדגשת קישורים באמצעות תפריט הנגישות באתר.</li>
                <li>תמיכה בסיסית בניווט באמצעות מקלדת.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-4">שימוש בווידג׳ט נגישות</h2>
              <p className="mb-3">
                באתר קיים תפריט נגישות (אייקון/כפתור &quot;נגישות&quot; המופיע בפינת המסך), המאפשר בין היתר:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>הגדלת/הקטנת גודל הגופן.</li>
                <li>שינוי קונטרסט.</li>
                <li>הדגשת קישורים.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-4">הערות והבהרות</h2>
              <p className="mb-3">
                אנו ממשיכים להשקיע מאמצים בהנגשת האתר והמערכת, אך ייתכן שחלק מהתכנים או הרכיבים עדיין אינם נגישים באופן מלא.
              </p>
              <p>
                אם נתקלת בבעיה נגישות כלשהי, נשמח שתעדכן אותנו, ונעשה מאמץ לטפל בכך בהקדם.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-4">פרטי קשר לנגישות</h2>
              <p className="mb-3">לפניות בנושא נגישות, אנא צור קשר באחד מהאמצעים הבאים:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  דוא&quot;ל:{" "}
                  <a
                    href="mailto:info@metapel.online"
                    className="text-primary hover:underline"
                  >
                    info@metapel.online
                  </a>
                </li>
                <li>בטופס יצירת הקשר באתר</li>
              </ul>
              <p className="mt-4">
                נא ציין/י בפנייה: תיאור הבעיה, הדף שבו נתקלת בקושי, סוג הדפדפן/מכשיר, וכל מידע נוסף שיכול לעזור לנו להבין ולשפר.
              </p>
              <p className="mt-6 text-sm text-text-secondary/70">
                עדכון אחרון להצהרת הנגישות: ‎מרץ 2026.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
