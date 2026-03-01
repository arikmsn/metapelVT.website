import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center py-1">
            <Image
              src="/Brand/Full-Logo-V1.png"
              alt="מטפל אונליין – ניהול חכם למטפלים מבוסס AI"
              height={40}
              width={160}
              style={{ height: 'auto', width: 'auto' }}
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
