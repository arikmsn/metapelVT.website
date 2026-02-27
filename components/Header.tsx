import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Brand/Full-Logo.png"
              alt="מטפל אונליין – ניהול חכם למטפלים מבוסס AI"
              width={140}
              height={48}
              className="h-10 w-auto md:h-12 md:w-auto"
              priority
            />
          </Link>
          
          <nav className="flex items-center gap-4">
            <a
              href="https://app.metapel.online"
              className="text-sm md:text-base font-medium text-primary hover:text-accent transition-colors"
            >
              כניסה למערכת
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
