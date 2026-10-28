import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-white/[0.08] bg-[#050608] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 shadow-sm">
                <img
                  src="/assets/nextpaper-icon.jpg"
                  alt="NextPaper Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg">
                NEXTPAPER<span className="text-cyan-400">.</span>DEV
              </span>
            </div>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              High-profile software development collective and systems engineering studio. 
              Engineering scalable distributed systems, edge compilers, and world-class enterprise SaaS.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/NextPaper-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-[#12151d] border border-white/[0.08] hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Org"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-zinc-400">
                org: NextPaper-dev
              </span>
            </div>
          </div>

          {/* Column 2: Flagship Products */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Flagship Products
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#flagship" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>StoresDZ Commerce Core</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">Go</span>
                </a>
              </li>
              <li>
                <a href="#flagship" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>StoresDZ Liquid Engine</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-orange-950 text-orange-400 border border-orange-800/40">Rust</span>
                </a>
              </li>
              <li>
                <a href="#flagship" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>StoresDZ Funnel SDK</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-950 text-purple-300 border border-purple-800/40">CDN</span>
                </a>
              </li>
              <li>
                <a href="#flagship" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>StoresDZ Admin Dashboard</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">Vite</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Systems & Architecture */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Engineering DNA
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Low-Latency Go</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Rust Edge Runtimes</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Casbin Multi-Tenancy</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">NATS Event Meshes</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Studio Contact
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="mailto:rafafaycal@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>Inquire / Briefing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/NextPaper-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Open Repos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Storesdz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>StoresDZ Org</span>
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-400">
              All NextPaper Systems Operational
            </span>
          </div>

          <div className="text-xs text-zinc-400 font-mono">
            &copy; {new Date().getFullYear()} NextPaper.dev. Crafted with Astro &amp; React.
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
