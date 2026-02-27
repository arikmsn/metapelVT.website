import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center py-1">
            <Image
              src="/Brand/Full-Logo.png"
              alt="מטפל אונליין – ניהול חכם למטפלים מבוסס AI"
              width={100}
              height={32}
              className="h-6 w-auto md:h-8 md:w-auto"
              priority
            />
          </Link>
          
          <nav className="flex items-center gap-4">
            <a
              href="https://app.metapel.online"
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              כניסה למערכת
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
