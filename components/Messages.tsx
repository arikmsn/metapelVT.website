import { heContent } from "@/content/he";
import Image from "next/image";

export default function Messages() {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src="/screenshots/messages.png"
                  alt="תקשורת מסודרת עם מטופלים"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-lg order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-warm/10 to-orange-400/10 rounded-full text-accent-warm text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              תקשורת
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
              תקשורת מסודרת עם מטופלים
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              שומרים על קשר עם מטופלים בצורה מסודרת ובטוחה. כל ההודעות במקום אחד, בלי להתבלבל בוואטסאפ או במייל.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">כל התקשורת במקום אחד מאובטח</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">אפשרות לשליחת הודעות מתוך המערכת</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">היסטוריה מלאה של התקשורת עם כל מטופל</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
