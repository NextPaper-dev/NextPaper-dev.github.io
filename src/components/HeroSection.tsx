import { ArrowRight, Cpu, Code2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-transparent to-orange-500/10 blur-[120px] pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Announcement Pill */}
          <a
            href="#flagship"
            className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.1] bg-[#12151e]/80 hover:border-cyan-500/40 hover:bg-[#151926] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,229,255,0.15)] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white transition-colors">
              <span className="text-cyan-400 font-semibold">Flagship Showcase:</span> StoresDZ Multi-Tenant Platform
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.08] mb-6">
            <span className="text-gradient-silver block">
              High-Performance Systems.
            </span>
            <span className="bg-gradient-to-r from-zinc-100 via-slate-200 to-zinc-400 bg-clip-text text-transparent block mt-1">
              Engineered for Scale.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-normal">
            NextPaper architects mission-critical distributed systems, hyper-fast Rust edge runtimes, 
            and flagship enterprise SaaS platforms with uncompromising performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#flagship"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(0,229,255,0.5)] group"
            >
              <span>Explore StoresDZ Flagship</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#architecture"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#12151e] text-zinc-300 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-white/[0.2] hover:bg-[#161a26] transition-all duration-200"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Architecture Blueprint</span>
            </a>
          </div>

          {/* Hero Visual: Origami Metallic Showcase Card with Live Telemetry */}
          <div className="w-full max-w-5xl relative group">
            {/* Glowing borders halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-slate-500/10 to-orange-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e14]/90 backdrop-blur-2xl p-4 sm:p-8 overflow-hidden shadow-2xl">
              
              {/* Header bar of the visual card */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  <span className="ml-2 text-xs font-mono text-zinc-400">
                    nextpaper://systems.kernel.v1
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    ACTIVE CLUSTER
                  </span>
                </div>
              </div>

              {/* Main Content Grid inside hero card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                
                {/* Left: Brand Metallic Asset Display */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-[#141822] to-[#0d0f14] border border-white/[0.08] group/img">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden shadow-2xl border border-white/[0.15]">
                    <img
                      src="/assets/nextpaper-logo.jpg"
                      alt="NextPaper Precision Origami"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                      Origami Precision
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Deterministic systems software & cloud architecture
                    </p>
                  </div>
                </div>

                {/* Right: Technical metrics & active telemetry */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-orange-400" />
                    <span>Real-Time Engine Telemetry</span>
                  </div>

                  {/* Benchmark 1 */}
                  <div className="p-4 rounded-xl bg-[#131620] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <span>Rust Liquid Storefront Compiler</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Edge</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Full HTML synthesis & cached asset serving</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-mono font-bold text-cyan-400">0.78 ms</div>
                      <div className="text-[10px] text-zinc-400 font-mono">p99 latency</div>
                    </div>
                  </div>

                  {/* Benchmark 2 */}
                  <div className="p-4 rounded-xl bg-[#131620] border border-white/[0.06] hover:border-orange-500/30 transition-all flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <span>Go 1.22 Commerce API Core</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">Gin + sqlc</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">PostgreSQL connection pooling + NATS streaming</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-mono font-bold text-orange-400">25,400+</div>
                      <div className="text-[10px] text-zinc-400 font-mono">req / sec</div>
                    </div>
                  </div>

                  {/* Benchmark 3 */}
                  <div className="p-4 rounded-xl bg-[#131620] border border-white/[0.06] hover:border-slate-400/30 transition-all flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <span>StoresDZ Funnel SDK Runtime</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-500/10 text-slate-300 border border-slate-500/20">Zero-Dep</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Instant checkout bridge with handshake validation</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-mono font-bold text-emerald-400">12.4 KB</div>
                      <div className="text-[10px] text-zinc-400 font-mono">Gzipped bundle</div>
                    </div>
                  </div>

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
