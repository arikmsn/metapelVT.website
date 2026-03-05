"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center py-1">
            <Image
              src="/Brand/Full-Logo-V1.png"
              alt="מטפל אונליין"
              height={40}
              width={160}
              className={`h-8 w-auto md:h-10 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={`text-sm font-medium transition-colors ${scrolled ? "text-text-secondary hover:text-primary" : "text-white/90 hover:text-white"}`}>תכונות</a>
            <a href="#how-it-works" className={`text-sm font-medium transition-colors ${scrolled ? "text-text-secondary hover:text-primary" : "text-white/90 hover:text-white"}`}>איך זה עובד</a>
            <a href="#testimonials" className={`text-sm font-medium transition-colors ${scrolled ? "text-text-secondary hover:text-primary" : "text-white/90 hover:text-white"}`}>המלצות</a>
            <a href="#faq" className={`text-sm font-medium transition-colors ${scrolled ? "text-text-secondary hover:text-primary" : "text-white/90 hover:text-white"}`}>שאלות</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.metapel.online"
              className="bg-teal-400 text-indigo-950 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-300 transition-colors"
            >
              כניסה למערכת
            </a>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
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
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-up bg-white">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-base font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>תכונות</a>
              <a href="#how-it-works" className="text-base font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>איך זה עובד</a>
              <a href="#testimonials" className="text-base font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>המלצות</a>
              <a href="#faq" className="text-base font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>שאלות</a>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <a
                  href="https://app.metapel.online"
                  className="bg-teal-400 text-indigo-950 font-semibold text-center text-base py-3 rounded-lg hover:bg-teal-300 transition-colors"
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
