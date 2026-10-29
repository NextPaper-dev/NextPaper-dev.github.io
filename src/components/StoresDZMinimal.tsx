import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Server, Zap, Layers, Eye } from 'lucide-react';
import { translations, type Language } from '../data/translations';

interface StoresDZMinimalProps {
  currentLang: Language;
}

type ScreenshotKey = 'landing' | 'dashboard' | 'templates' | 'storefront' | 'settings';

export const StoresDZMinimal: React.FC<StoresDZMinimalProps> = ({ currentLang }) => {
  const [activeScreen, setActiveScreen] = useState<ScreenshotKey>('dashboard');
  const t = translations[currentLang].storesdz;

  const screenshots: Record<ScreenshotKey, { src: string; label: string }> = {
    dashboard: {
      src: '/assets/storesdz/dashboard.png',
      label: t.screenshots.dashboard
    },
    landing: {
      src: '/assets/storesdz/landing.png',
      label: t.screenshots.landing
    },
    templates: {
      src: '/assets/storesdz/templates.png',
      label: t.screenshots.templates
    },
    storefront: {
      src: '/assets/storesdz/storefront.png',
      label: t.screenshots.storefront
    },
    settings: {
      src: '/assets/storesdz/settings.png',
      label: t.screenshots.settings
    }
  };

  return (
    <section id="storesdz" className="py-20 relative border-t border-slate-200 dark:border-outline-variant/30 bg-slate-50/50 dark:bg-[#0c0e14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-950/60 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-light-primary dark:text-surface-light mb-3">
            {t.title}
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-outline dark:text-on-surface-variant leading-relaxed">
            {t.subtitle}
          </p>

          <p className="text-xs font-mono text-slate-500 dark:text-outline mt-2 italic">
            {t.minimal_notice}
          </p>
        </div>

        {/* Minimal Screenshot & Feature Showcase */}
        <div className="rounded-2xl border border-slate-300 dark:border-outline-variant/40 bg-surface-light dark:bg-surface shadow-xl overflow-hidden">
          
          {/* Top Bar with Screenshot Switcher Tabs */}
          <div className="p-3 sm:p-4 bg-slate-100 dark:bg-background-dark/80 border-b border-slate-200 dark:border-outline-variant/30 flex flex-wrap items-center justify-between gap-3">
            
            {/* Screenshot Switcher Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {(Object.keys(screenshots) as ScreenshotKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveScreen(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeScreen === key
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'bg-surface-light dark:bg-surface text-slate-600 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light border border-slate-200 dark:border-outline-variant/30'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>{screenshots[key].label}</span>
                </button>
              ))}
            </div>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/Storesdz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline ml-auto"
            >
              <span>{t.view_repo}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Screenshot Display Frame */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-background-dark flex items-center justify-center p-2 sm:p-4 group">
            <img
              src={screenshots[activeScreen].src}
              alt={screenshots[activeScreen].label}
              className="w-full h-full object-contain rounded-lg shadow-md transition-all duration-300"
            />
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-mono text-white border border-white/10 pointer-events-none">
              {screenshots[activeScreen].label}
            </div>
          </div>

          {/* Bottom Architectural Highlights Bar */}
          <div className="p-4 sm:p-6 bg-surface-light dark:bg-surface border-t border-slate-200 dark:border-outline-variant/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-outline-variant/20">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-text-light-primary dark:text-surface-light">
                  {t.stats.latency}
                </div>
                <div className="text-[11px] text-outline font-mono">
                  {t.stats.latency_label}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-outline-variant/20">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-text-light-primary dark:text-surface-light">
                  {t.stats.throughput}
                </div>
                <div className="text-[11px] text-outline font-mono">
                  {t.stats.throughput_label}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-outline-variant/20">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-text-light-primary dark:text-surface-light">
                  {t.stats.bundle}
                </div>
                <div className="text-[11px] text-outline font-mono">
                  {t.stats.bundle_label}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default StoresDZMinimal;
