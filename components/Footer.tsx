import { heContent } from "@/content/he";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">מ</span>
            </div>
            <span className="text-white/80 font-medium">{heContent.footer.brandName}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              {heContent.footer.termsLabel}
            </a>
            <a
              href="mailto:info@metapel.online"
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              {heContent.footer.contactLabel}
            </a>
          </div>

          <p className="text-white/40 text-sm">
            © {currentYear} {heContent.footer.brandName}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
