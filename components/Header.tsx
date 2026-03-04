"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center py-1">
            <Image
              src="/Brand/Full-Logo-V1.png"
              alt="מטפל אונליין"
              height={40}
              width={160}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">תכונות</a>
            <a href="#how-it-works" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">איך זה עובד</a>
            <a href="#testimonials" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">המלצות</a>
            <a href="#faq" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">שאלות</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.metapel.online"
              className="btn-primary text-sm px-5 py-2.5"
            >
              כניסה למערכת
            </a>
          </div>

          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="תפריט"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-base font-medium text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>תכונות</a>
              <a href="#how-it-works" className="text-base font-medium text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>איך זה עובד</a>
              <a href="#testimonials" className="text-base font-medium text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>המלצות</a>
              <a href="#faq" className="text-base font-medium text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>שאלות</a>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <a
                  href="https://app.metapel.online"
                  className="btn-primary text-center text-base"
                >
                  כניסה למערכת
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
