import React from 'react';
import { Rocket, Cpu, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { translations, type Language } from '../data/translations';

interface StartupCapabilitiesProps {
  currentLang: Language;
}

export const StartupCapabilities: React.FC<StartupCapabilitiesProps> = ({ currentLang }) => {
  const t = translations[currentLang].capabilities;

  const icons = [
    <Cpu className="w-5 h-5 text-primary-container" />,
    <Layers className="w-5 h-5 text-emerald-500" />,
    <Sparkles className="w-5 h-5 text-tertiary" />,
    <Rocket className="w-5 h-5 text-blue-500" />
  ];

  return (
    <section id="capabilities" className="py-24 relative border-t border-slate-200 dark:border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light-primary dark:text-surface-light mb-4">
            {t.title}
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-outline dark:text-on-surface-variant leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-background-dark border border-slate-200 dark:border-outline-variant/30">
                    {icons[idx]}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary-container/10 text-primary-container dark:text-primary font-semibold uppercase">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-light-primary dark:text-surface-light mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-outline dark:text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-outline-variant/20 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Production-tested engineering methodologies</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Acceleration Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-container/10 via-blue-500/5 to-tertiary/10 border border-primary-container/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-text-light-primary dark:text-surface-light">
              {currentLang === 'en'
                ? 'Have a vision for your next startup or digital product?'
                : 'Vous avez une vision pour votre prochaine startup ou produit numérique ?'}
            </h3>
            <p className="text-xs sm:text-sm text-outline dark:text-on-surface-variant mt-1">
              {currentLang === 'en'
                ? 'We partner with founders to design, build, and deploy high-concurrency systems without friction.'
                : 'Nous accompagnons les fondateurs pour concevoir, coder et déployer des systèmes scalables sans friction.'}
            </p>
          </div>

          <a
            href="mailto:rafafaycal@gmail.com"
            className="px-6 py-3 rounded-xl bg-primary-container text-white font-semibold text-xs sm:text-sm uppercase tracking-wide shadow-md hover:opacity-95 transition-all active:scale-95 shrink-0 flex items-center gap-2"
          >
            <span>{currentLang === 'en' ? 'Start a Project' : 'Lancer un Projet'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
export default StartupCapabilities;
