import React, { useState, useEffect } from 'react';
import type { Language } from '../data/translations';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { StoresDZMinimal } from './StoresDZMinimal';
import { StartupCapabilities } from './StartupCapabilities';
import { TeamSection } from './TeamSection';
import { Footer } from './Footer';
import { WhatsAppFab } from './WhatsAppFab';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('nextpaper_lang') as Language;
      if (savedLang === 'en' || savedLang === 'fr') {
        setLang(savedLang);
      } else if (typeof navigator !== 'undefined' && navigator.language.startsWith('fr')) {
        setLang('fr');
      }
    } catch {
      // Ignore localStorage failures
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('nextpaper_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col z-10 selection:bg-primary-container selection:text-white">
      {/* Top Navbar */}
      <Navbar currentLang={lang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <HeroSection currentLang={lang} />

        {/* 2. Flagship Minimal Product: StoresDZ */}
        <StoresDZMinimal currentLang={lang} />

        {/* 3. Startup Acceleration Capabilities & Disciplines */}
        <StartupCapabilities currentLang={lang} />

        {/* 4. Engineering Team Section & Full Bio Modal */}
        <TeamSection currentLang={lang} />
      </main>

      {/* Footer */}
      <Footer currentLang={lang} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFab currentLang={lang} />
    </div>
  );
};

export default App;
