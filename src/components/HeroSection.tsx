import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { translations, type Language } from '../data/translations';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[currentLang].hero;

  const copyCommand = () => {
    navigator.clipboard.writeText('npm install @nextpaper/core');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Triggers */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container dark:text-primary">
              <Sparkles className="w-3.5 h-3.5 text-primary-container dark:text-primary" />
              <span className="text-xs font-mono font-semibold tracking-wide uppercase">
                {t.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-light-primary dark:text-surface-light leading-[1.12]">
              <span className="block">{t.title_line1}</span>
              <span className="block bg-gradient-to-r from-primary-container via-blue-400 to-tertiary bg-clip-text text-transparent">
                {t.title_line2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-outline dark:text-on-surface-variant max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#team"
                className="px-6 py-3.5 rounded-lg bg-primary-container text-white font-semibold text-sm hover:opacity-90 shadow-md hover:shadow-primary-container/25 transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span>{t.cta_primary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#storesdz"
                className="px-6 py-3.5 rounded-lg border border-slate-300 dark:border-outline-variant/40 bg-surface-light/60 dark:bg-surface/60 text-text-light-primary dark:text-surface-light font-medium text-sm hover:border-primary-container transition-all duration-200 active:scale-95"
              >
                {t.cta_secondary}
              </a>
            </div>

            {/* Quick CLI Install Bar */}
            <div className="pt-2 max-w-xl">
              <div className="bg-surface-light dark:bg-surface border border-slate-200 dark:border-outline-variant/40 rounded-lg p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-outline dark:text-on-surface-variant">
                  <span className="text-primary-container dark:text-primary font-bold">$</span>
                  <span className="text-text-light-primary dark:text-surface-light select-all">
                    npm install @nextpaper/core
                  </span>
                </div>
                <button
                  onClick={copyCommand}
                  className="p-1.5 rounded text-slate-500 hover:text-text-light-primary dark:text-on-surface-variant dark:hover:text-surface-light transition-colors relative"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-outline dark:text-on-surface-variant">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.trust_speed}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.trust_scale}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.trust_deploy}</span>
              </div>
            </div>

          </div>

          {/* Right Column: NextPaper Emblem & Telemetry Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary-container/20 to-tertiary/10 rounded-2xl blur-2xl -z-10"></div>
            
            <div className="w-full max-w-md bg-surface-light/80 dark:bg-surface/85 border border-slate-200 dark:border-outline-variant/40 rounded-xl p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-outline-variant/20 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 font-mono text-xs text-outline">artifact::paper_pipeline_v2</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-primary-container/10 text-primary-container dark:text-primary font-mono text-xs">
                  READY
                </div>
              </div>

              {/* Central Logo Asset */}
              <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-outline-variant/30 aspect-square shadow-inner bg-background-dark flex items-center justify-center group">
                <img
                  src="/assets/nextpaper-logo.jpg"
                  alt="NEXT PAPER brand identity"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2.5 rounded-lg bg-background-dark/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2 text-white">
                    <Terminal className="w-3.5 h-3.5 text-primary-container" />
                    <span>Engine: Active</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">99.98% Accuracy</span>
                </div>
              </div>

              {/* Bottom Telemetry Row */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-2 font-mono text-center">
                <div className="p-2 rounded bg-slate-100 dark:bg-background-dark/60 border border-slate-200 dark:border-outline-variant/20">
                  <div className="text-[10px] text-outline">P99 Jitter</div>
                  <div className="text-xs sm:text-sm font-semibold text-text-light-primary dark:text-surface-light">&lt; 1.2ms</div>
                </div>
                <div className="p-2 rounded bg-slate-100 dark:bg-background-dark/60 border border-slate-200 dark:border-outline-variant/20">
                  <div className="text-[10px] text-outline">State</div>
                  <div className="text-xs sm:text-sm font-semibold text-primary-container">Quantized</div>
                </div>
                <div className="p-2 rounded bg-slate-100 dark:bg-background-dark/60 border border-slate-200 dark:border-outline-variant/20">
                  <div className="text-[10px] text-outline">Throughput</div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-500 dark:text-emerald-400">25k req/s</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
