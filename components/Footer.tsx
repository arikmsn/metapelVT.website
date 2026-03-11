import { heContent } from "@/content/he";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Brand/Full-Logo-V1.png"
                alt="מטפל אונליין"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 max-w-sm leading-relaxed">
              {heContent.footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">ניווט</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">תכונות</a></li>
              <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">איך זה עובד</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-white transition-colors">המלצות</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white transition-colors">שאלות נפוצות</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">דברו איתנו</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@metapel.online" className="text-white/60 hover:text-white transition-colors">
                  info@metapel.online
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              תנאי שימוש ומדיניות פרטיות
            </Link>
            <Link href="/accessibility" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              הצהרת נגישות
            </Link>
          </div>

          <p className="text-white/40 text-sm">
            © {currentYear} {heContent.footer.brandName}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
