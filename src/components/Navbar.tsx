import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { translations, type Language } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Initial theme check
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = currentLang === 'en' ? 'fr' : 'en';
    onLanguageChange(nextLang);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full border-b ${
        scrolled
          ? 'bg-surface-light/85 dark:bg-background-dark/85 backdrop-blur-xl border-slate-200 dark:border-outline-variant/30 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-300 dark:border-outline-variant/40 bg-surface shadow-sm flex items-center justify-center p-0.5 group-hover:border-primary-container transition-colors">
              <img
                src="/assets/nextpaper-icon.jpg"
                alt="NextPaper icon"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-text-light-primary dark:text-surface-light text-base leading-tight">
                nextpaper<span className="text-primary-container dark:text-primary">.dev</span>
              </span>
            </div>
          </a>

          {/* Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-light dark:bg-surface border border-slate-200 dark:border-outline-variant/30 text-xs font-mono text-outline dark:text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.status_online}</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-on-surface-variant">
          <a
            href="#storesdz"
            className="hover:text-primary-container dark:hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <span>{t.storesdz}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary-container/10 text-primary-container dark:text-primary font-semibold">
              v1.0
            </span>
          </a>
          <a
            href="#team"
            className="hover:text-primary-container dark:hover:text-primary transition-colors"
          >
            {t.team}
          </a>
          <a
            href="#capabilities"
            className="hover:text-primary-container dark:hover:text-primary transition-colors"
          >
            {t.services}
          </a>
        </nav>

        {/* Right Actions: Lang, Theme, Github, Contact */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-outline-variant/40 bg-surface-light dark:bg-surface text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light text-xs font-mono font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
            aria-label="Toggle language English / French"
            title="Switch Language (EN / FR)"
          >
            <Globe className="w-3.5 h-3.5 text-primary-container" />
            <span>{currentLang.toUpperCase()}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-outline-variant/40 bg-surface-light dark:bg-surface text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light transition-all active:scale-95 shadow-sm"
            aria-label="Toggle theme light / dark"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-tertiary" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/NextPaper-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-slate-200 dark:border-outline-variant/40 bg-surface-light dark:bg-surface text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light transition-all"
            aria-label="GitHub Organization"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Primary Contact CTA */}
          <a
            href="mailto:rafafaycal@gmail.com"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-primary-container text-white font-semibold text-xs tracking-wide uppercase shadow-sm hover:opacity-95 transition-all active:scale-95"
          >
            {t.contact}
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-outline-variant/40 bg-surface-light dark:bg-background-dark p-4 space-y-3 shadow-lg">
          <a
            href="#storesdz"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-text-light-primary dark:text-surface-light hover:bg-slate-100 dark:hover:bg-surface"
          >
            {t.storesdz}
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-text-light-primary dark:text-surface-light hover:bg-slate-100 dark:hover:bg-surface"
          >
            {t.team}
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-text-light-primary dark:text-surface-light hover:bg-slate-100 dark:hover:bg-surface"
          >
            {t.services}
          </a>
          <a
            href="mailto:rafafaycal@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold bg-primary-container text-white text-center rounded-lg"
          >
            {t.contact}
          </a>
        </div>
      )}
    </header>
  );
};
export default Navbar;
