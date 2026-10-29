import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { translations, type Language } from '../data/translations';

interface FooterProps {
  currentLang?: Language;
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

export const Footer: React.FC<FooterProps> = ({ currentLang = 'en' }) => {
  const t = translations[currentLang].footer;
  const isEn = currentLang === 'en';

  return (
    <footer id="contact" className="border-t border-outline-variant/20 dark:border-outline-variant/30 bg-surface-light dark:bg-[#0c0d0f] transition-colors duration-300 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-primary-container/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-outline-variant/20 dark:border-outline-variant/30">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-outline-variant/40 bg-surface shadow-sm flex items-center justify-center p-0.5">
                <img
                  src="/assets/nextpaper-icon.png"
                  alt="NextPaper Logo"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <span className="font-extrabold tracking-tight text-text-light-primary dark:text-surface-light text-lg">
                NEXTPAPER<span className="text-primary-container dark:text-primary">.</span>DEV
              </span>
            </div>

            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
              {t.tagline} {isEn 
                ? 'Engineering scalable distributed architectures, Go/Rust microservices, and conversion engines for modern startups.'
                : 'Conception d\'architectures distribuées évolutives, de microservices Go/Rust et de moteurs de conversion pour startups modernes.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/NextPaper-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light bg-surface-container-low dark:bg-surface border border-outline-variant/30 hover:border-primary-container transition-colors"
                aria-label="GitHub Org"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-on-surface-variant">
                org: NextPaper-dev
              </span>
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-light-primary dark:text-surface-light">
              {t.links_title}
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a href="#storesdz" className="hover:text-primary-container dark:hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>StoresDZ Commerce Engine</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">Go Gin</span>
                </a>
              </li>
              <li>
                <a href="#storesdz" className="hover:text-primary-container dark:hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>Rust Liquid Template JIT</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-500 dark:text-orange-400 border border-orange-500/20">Rust</span>
                </a>
              </li>
              <li>
                <a href="#storesdz" className="hover:text-primary-container dark:hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>High-Speed Checkout Funnel</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/20">Edge</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Storesdz" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container dark:hover:text-primary transition-colors flex items-center gap-1">
                  <span>StoresDZ Organization</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Team & Expertise */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-light-primary dark:text-surface-light">
              {t.team_title}
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a href="#team" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors">Faycal Rafa</a>
              </li>
              <li>
                <a href="#team" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors">Sid Ali Saadi</a>
              </li>
              <li>
                <a href="#team" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors">Nouh Rafa</a>
              </li>
              <li>
                <a href="#team" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors">Sofiane Boutahloula</a>
              </li>
              <li>
                <a href="#team" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors">Aymen Bnh</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-light-primary dark:text-surface-light">
              {t.contact_title}
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a href="mailto:rafafaycal@gmail.com" className="hover:text-primary-container dark:hover:text-primary transition-colors flex items-center gap-1">
                  <span>{isEn ? 'Inquire / Startup Brief' : 'Contact / Brief Startup'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/NextPaper-dev" target="_blank" rel="noopener noreferrer" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors flex items-center gap-1">
                  <span>{isEn ? 'Public Repos' : 'Dépôts Publics'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-light-primary dark:hover:text-surface-light transition-colors flex items-center gap-1">
                  <span>{isEn ? 'Our Stack & Pillars' : 'Notre Stack & Piliers'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-on-surface-variant">
              {t.status_operational}
            </span>
          </div>

          <div className="text-xs text-on-surface-variant font-mono">
            &copy; {new Date().getFullYear()} NextPaper.dev. {t.rights}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
