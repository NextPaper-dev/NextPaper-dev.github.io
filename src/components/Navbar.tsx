import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full border-b ${
        scrolled
          ? 'bg-[#07080a]/85 backdrop-blur-xl border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-sm">
            <img
              src="/assets/nextpaper-icon.jpg"
              alt="NextPaper"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-base leading-tight flex items-center gap-1.5">
              NEXTPAPER<span className="text-cyan-400">.</span>DEV
            </span>
            <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono -mt-0.5">
              Systems Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-300">
          <a
            href="#flagship"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2 group"
          >
            <span>StoresDZ</span>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-orange-500/20 border border-cyan-500/30 text-cyan-300 font-semibold group-hover:border-cyan-400 transition-colors">
              Flagship
            </span>
          </a>
          <a
            href="#architecture"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            Architecture
          </a>
          <a
            href="#systems"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            Systems DNA
          </a>
          <a
            href="#terminal"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.05] transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Interactive CLI</span>
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/NextPaper-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.15] transition-all"
            aria-label="GitHub Organization"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase rounded-lg overflow-hidden group border border-white/[0.12] bg-[#12151d] hover:border-cyan-400/50 transition-all shadow-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-1.5">
              <span>Initiate Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#07080a]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <a
            href="#flagship"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/[0.06]"
          >
            StoresDZ <span className="text-xs text-cyan-400 ml-2 font-mono">FLAGSHIP PRODUCT</span>
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-white/[0.06]"
          >
            Architecture
          </a>
          <a
            href="#systems"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-white/[0.06]"
          >
            Systems DNA
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-white/[0.06]"
          >
            Interactive CLI
          </a>
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="https://github.com/NextPaper-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Organization</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-xs font-semibold uppercase bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500/30"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
