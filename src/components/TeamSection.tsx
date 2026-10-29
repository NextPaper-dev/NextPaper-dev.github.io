import React, { useState } from 'react';
import { Users, ArrowUpRight, X, Globe } from 'lucide-react';
import { teamMembers, type TeamMember } from '../data/team';
import { translations, type Language } from '../data/translations';

interface TeamSectionProps {
  currentLang: Language;
}

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46V10.9M7.84 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const t = translations[currentLang].team;

  const handleOpenModal = (member?: TeamMember) => {
    setSelectedMember(member || null);
    setModalOpen(true);
  };

  return (
    <section id="team" className="py-24 relative border-t border-slate-200 dark:border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container dark:text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light-primary dark:text-surface-light mb-4">
            {t.title}
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-outline dark:text-on-surface-variant leading-relaxed mb-6">
            {t.subtitle}
          </p>

          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all active:scale-95"
          >
            <span>{t.view_team_button}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => handleOpenModal(member)}
              className="surface-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  
                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-outline-variant/60 shadow-md group-hover:border-primary-container transition-colors shrink-0 bg-slate-100 dark:bg-surface flex items-center justify-center">
                    {member.avatar ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to monogram if image fails
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="font-mono font-bold text-lg text-primary-container">
                        {member.avatarFallback}
                      </span>
                    )}
                  </div>

                  {/* Social Actions */}
                  <div className="flex items-center gap-2 text-slate-400 dark:text-on-surface-variant">
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                        title="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.portfolioUrl && (
                      <a
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:text-primary-container hover:bg-slate-100 dark:hover:bg-surface transition-colors"
                        title="Personal Portfolio"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:text-text-light-primary dark:hover:text-surface-light hover:bg-slate-100 dark:hover:bg-surface transition-colors"
                        title="GitHub Profile"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-text-light-primary dark:text-surface-light group-hover:text-primary-container transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-medium text-primary-container dark:text-primary mt-0.5">
                  {t.roles[member.roleKey]}
                </p>

                <p className="text-xs text-outline dark:text-on-surface-variant mt-3 line-clamp-2 leading-relaxed">
                  {t.bios[member.roleKey]}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-outline-variant/30 flex flex-wrap gap-1.5">
                {member.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-background-dark text-slate-700 dark:text-on-surface-variant border border-slate-200 dark:border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Team Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-light dark:bg-surface border border-slate-200 dark:border-outline-variant/50 shadow-2xl p-6 sm:p-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-outline-variant/30 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-surface-light">
                  {t.modal_title}
                </h3>
                <p className="text-xs text-outline dark:text-on-surface-variant mt-0.5">
                  {t.modal_subtitle}
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-text-light-primary dark:text-on-surface-variant dark:hover:text-surface-light hover:bg-slate-100 dark:hover:bg-background-dark transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of Full Team Profiles */}
            <div className="space-y-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`p-4 sm:p-5 rounded-xl border transition-all ${
                    selectedMember?.id === member.id
                      ? 'border-primary-container bg-primary-container/5 dark:bg-primary-container/10'
                      : 'border-slate-200 dark:border-outline-variant/30 bg-slate-50/50 dark:bg-background-dark/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-outline-variant/60 bg-surface flex items-center justify-center shrink-0">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="font-mono font-bold text-sm text-primary-container">
                            {member.avatarFallback}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-text-light-primary dark:text-surface-light text-base">
                          {member.name}
                        </div>
                        <div className="text-xs font-mono text-primary-container dark:text-primary">
                          {t.roles[member.roleKey]}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors flex items-center gap-1"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {member.portfolioUrl && (
                        <a
                          href={member.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-200 dark:bg-surface text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light transition-colors flex items-center gap-1"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Portfolio</span>
                        </a>
                      )}
                      {member.githubUrl && (
                        <a
                          href={member.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-200 dark:bg-surface text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light transition-colors flex items-center gap-1"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-outline dark:text-on-surface-variant mt-3 leading-relaxed">
                    {t.bios[member.roleKey]}
                  </p>

                  {member.previousExperience && (
                    <div className="mt-2 text-xs font-mono text-slate-500 dark:text-outline flex items-center gap-1.5">
                      <span className="font-semibold text-text-light-primary dark:text-surface-light">Track Record:</span>
                      <span>{member.previousExperience}</span>
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {member.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-background-dark text-slate-600 dark:text-on-surface-variant border border-slate-200 dark:border-outline-variant/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-outline-variant/30 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 rounded-lg bg-slate-200 dark:bg-surface text-slate-700 dark:text-on-surface-variant hover:text-text-light-primary dark:hover:text-surface-light text-xs font-semibold"
              >
                {t.close_modal}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
export default TeamSection;
