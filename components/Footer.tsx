import { heContent } from "@/content/he";
import { TermsModal } from "@/components/TermsModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">מ</span>
            </div>
            <span className="text-white/80 font-medium text-sm sm:text-base">{heContent.footer.brandName}</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <TermsModal />
            <a
              href="mailto:info@metapel.online"
              className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-200"
            >
              {heContent.footer.contactLabel}
            </a>
          </div>

          <p className="text-white/40 text-xs sm:text-sm order-3">
            © {currentYear} {heContent.footer.brandName}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
