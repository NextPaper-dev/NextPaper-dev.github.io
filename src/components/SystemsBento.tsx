import { Cpu, ShieldCheck, Zap, Network, Bot } from 'lucide-react';

export const SystemsBento: React.FC = () => {
  return (
    <section id="systems" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-orange-400" />
            <span>NextPaper Engineering Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Systems <span className="text-gradient-silver">DNA</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-400">
            NextPaper solves complex infrastructure challenges by pairing bare-metal performance with modern developer ergonomics.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Low-Latency Systems (Large) */}
          <div className="md:col-span-8 rounded-2xl bg-[#0e1118]/80 border border-white/[0.08] hover:border-cyan-500/30 p-8 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 flex items-center justify-center mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Deterministic Low Latency</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                We design services that bypass the overhead of heavy interpreters and sluggish ORMs. 
                Using Go 1.22 with Gin and sqlc alongside native Rust runtimes, we deliver sub-millisecond p99 response times under intense load.
              </p>
            </div>

            {/* Architecture Pill Graphic */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-zinc-500 font-mono">MEMORY FOOTPRINT</div>
                <div className="text-lg font-bold font-mono text-cyan-400 mt-0.5">&lt; 32 MB</div>
                <div className="text-[11px] text-zinc-400">Per isolated worker</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono">CONCURRENCY</div>
                <div className="text-lg font-bold font-mono text-white mt-0.5">Goroutine Pool</div>
                <div className="text-[11px] text-zinc-400">Lock-free channel routing</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono">QUERY OVERHEAD</div>
                <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">0% ORM Lag</div>
                <div className="text-[11px] text-zinc-400">Native sqlc compiled SQL</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Multi-Tenant Isolation (Medium) */}
          <div className="md:col-span-4 rounded-2xl bg-[#0e1118]/80 border border-white/[0.08] hover:border-orange-500/30 p-8 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-500/10 transition-colors"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-950/60 text-orange-400 border border-orange-800/40 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hard Multi-Tenancy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Zero data leakage across merchant boundaries. Strict Casbin RBAC policies enforce resource ownership across every endpoint.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Tenant Partitioning</span>
              <span className="text-orange-400 font-bold">Postgres Schemas</span>
            </div>
          </div>

          {/* Bento Card 3: Event-Driven Topologies */}
          <div className="md:col-span-4 rounded-2xl bg-[#0e1118]/80 border border-white/[0.08] hover:border-purple-500/30 p-8 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-800/40 flex items-center justify-center mb-6">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Resilient Event Bus</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Powered by NATS JetStream. Decouples transaction ingestion from delivery calculation, receipt dispatch, and inventory rebalancing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Queue Reliability</span>
              <span className="text-purple-400 font-bold">At-Least-Once ACK</span>
            </div>
          </div>

          {/* Bento Card 4: AI & Agentic Pipelines (Large) */}
          <div className="md:col-span-8 rounded-2xl bg-[#0e1118]/80 border border-white/[0.08] hover:border-emerald-500/30 p-8 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 flex items-center justify-center mb-6">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Applied AI & Agentic Workflows</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                We integrate state-of-the-art LLMs (Gemini, OpenAI) directly into operational workflows. 
                From automated AliExpress product catalog ingestion to intelligent carrier dispute arbitration.
              </p>
            </div>

            {/* Architecture Pill Graphic */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-zinc-500 font-mono">INGESTION AGENT</div>
                <div className="text-sm font-bold font-mono text-white mt-0.5">Scraper Pipeline</div>
                <div className="text-[11px] text-zinc-400">Multi-variant mapping</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono">LLM RUNTIMES</div>
                <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">Gemini 3.8 / OpenAI</div>
                <div className="text-[11px] text-zinc-400">Contextual translation</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono">REDUCTION FACTOR</div>
                <div className="text-sm font-bold font-mono text-cyan-400 mt-0.5">90% Less Manual Entry</div>
                <div className="text-[11px] text-zinc-400">Automated copy generation</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default SystemsBento;
