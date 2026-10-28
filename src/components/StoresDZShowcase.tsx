import React, { useState } from 'react';
import { 
  Server, 
  Zap, 
  Layers, 
  ArrowUpRight, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  Terminal as TerminalIcon
} from 'lucide-react';

export const StoresDZShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'edge' | 'sdk' | 'dashboard'>('core');
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<string | null>(null);

  const runSimulation = (type: string) => {
    setSimulating(true);
    setSimResult(null);
    setTimeout(() => {
      setSimulating(false);
      if (type === 'liquid') {
        setSimResult(`[RUST LIQUID ENGINE] Compiled template "funnel-theme-v2" in 0.64ms. Static bytes: 48.2KB. Cache HIT.`);
      } else if (type === 'quote') {
        setSimResult(`[GO COMMERCE API] 200 OK | quote_id: "q_88fa901" | currency: "DZD" | total: 4,800.00 DZD | latency: 1.1ms`);
      } else {
        setSimResult(`[NATS STREAM] Published "order.created" -> workers=12, ack=true, cluster_seq=489104`);
      }
    }, 450);
  };

  return (
    <section id="flagship" className="py-24 relative border-t border-white/[0.06] bg-[#090b10]/60">
      {/* Background flare */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>NextPaper Flagship Release</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            StoresDZ <span className="text-gradient-cyan-amber">E-Commerce Platform</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg text-zinc-400">
            A battle-tested, high-throughput commerce ecosystem engineered by NextPaper. 
            Blending Go microservices, Rust Liquid compilation, and an autonomous edge funnel runtime.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('core')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeTab === 'core'
                ? 'bg-white text-black border-white shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)]'
                : 'bg-[#12151e] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/[0.18]'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Go Commerce Core</span>
          </button>

          <button
            onClick={() => setActiveTab('edge')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeTab === 'edge'
                ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_-3px_rgba(0,229,255,0.4)]'
                : 'bg-[#12151e] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/[0.18]'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Rust Liquid Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('sdk')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeTab === 'sdk'
                ? 'bg-orange-500 text-white border-orange-500 shadow-[0_0_20px_-3px_rgba(255,107,0,0.4)]'
                : 'bg-[#12151e] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/[0.18]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Funnel SDK Runtime</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeTab === 'dashboard'
                ? 'bg-slate-200 text-black border-slate-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)]'
                : 'bg-[#12151e] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/[0.18]'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Merchant Dashboard</span>
          </button>
        </div>

        {/* Tab Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Content Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f121a] border border-white/[0.1] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            {activeTab === 'core' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-800/40">
                      <Server className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">Go Multi-Tenant Architecture</h3>
                      <p className="text-xs text-zinc-400 font-mono">Repo: Storesdz/storesdz</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    Production Core
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  The backbone of StoresDZ is engineered with Go 1.22 and the Gin web framework. 
                  It provides multi-tenant store isolation, strict SQL query generation with <span className="text-white font-mono">sqlc</span>, 
                  role-based access control via <span className="text-white font-mono">Casbin</span>, and high-concurrency event publishing with <span className="text-white font-mono">NATS</span>.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06]">
                    <div className="text-xs text-zinc-400 mb-1">Database Layer</div>
                    <div className="text-sm font-semibold text-white">PostgreSQL + pgx pool</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-1">Zero ORM overhead</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06]">
                    <div className="text-xs text-zinc-400 mb-1">Message Broker</div>
                    <div className="text-sm font-semibold text-white">NATS JetStream</div>
                    <div className="text-[11px] text-orange-400 font-mono mt-1">Sub-ms event queue</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Dynamic Wilaya & carrier contract rate calculation for Algerian commerce</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Multi-store schema separation with authoritative checkout attempt verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Integrated AI catalog enrichment with Google Gemini and OpenAI</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'edge' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-orange-950/50 text-orange-400 border border-orange-800/40">
                      <Zap className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">Rust Liquid Storefront Compiler</h3>
                      <p className="text-xs text-zinc-400 font-mono">Repos: Storesdz/liquid-renderer & Storesdz/funnel-server</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                    High Performance
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  NextPaper engineered a standalone Rust Liquid renderer and high-speed HTML caching engine. 
                  Merchant storefronts are compiled to pure HTML at native speeds, providing sub-millisecond page delivery with zero node runtime overhead.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06]">
                    <div className="text-xs text-zinc-400 mb-1">Theme Compilation</div>
                    <div className="text-sm font-semibold text-white">Liquid AST Engine</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-1">&lt; 0.8ms compile time</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06]">
                    <div className="text-xs text-zinc-400 mb-1">Serving Runtime</div>
                    <div className="text-sm font-semibold text-white">Actix/Axum Rust Edge</div>
                    <div className="text-[11px] text-orange-400 font-mono mt-1">Zero cold-start delay</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct merchant HTML injection with isolated iframe sandbox mode</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>In-memory 5-minute dynamic cache with instant invalidate webhooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct asset compression & jsDelivr CDN synchronization</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'sdk' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-purple-950/50 text-purple-400 border border-purple-800/40">
                      <Layers className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">Standalone Funnel SDK</h3>
                      <p className="text-xs text-zinc-400 font-mono">Repo: Storesdz/funnel-sdk</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    v1.2.0 Pinned
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  A 12KB standalone browser SDK distributed via jsDelivr CDN. It allows merchants to deploy high-converting landing pages 
                  that execute direct server-validated quotes, delivery calculations, and checkout transactions with zero framework bloat.
                </p>

                <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06] font-mono text-xs text-zinc-300">
                  <div className="text-zinc-500 mb-1">// Zero-dependency embed</div>
                  <span className="text-cyan-300">&lt;script</span> <span className="text-orange-300">src</span>=<span className="text-emerald-300">"https://cdn.jsdelivr.net/gh/Storesdz/funnel-sdk@v1.2.0/dist/storesdz-sdk.min.js"</span><span className="text-cyan-300">&gt;&lt;/script&gt;</span>
                </div>

                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>State recovery for uncertain checkout states with anti-double-charge locks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Automated handshake validation between parent storefront and sandboxed child</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Built-in asynchronous asset loader for jQuery and UI enhancements</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-emerald-950/50 text-emerald-400 border border-emerald-800/40">
                      <Activity className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">Merchant Admin Dashboard</h3>
                      <p className="text-xs text-zinc-400 font-mono">Repo: Storesdz/storesdzdash</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    React + Vite
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  A high-velocity dashboard engineered with React 19, Vite, TypeScript, and Shadcn UI. 
                  Equipped with live order streaming, Monaco code editor for theme tweaking, and integrated AliExpress scraper queues.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06]">
                    <div className="text-xs text-zinc-400 mb-1">Editor Integration</div>
                    <div className="text-sm font-semibold text-white">Monaco Code Editor</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-1">Live Liquid syntax check</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#141823] border border-white/[0.06]">
                    <div className="text-xs text-zinc-400 mb-1">Product Automation</div>
                    <div className="text-sm font-semibold text-white">AliExpress Scraper</div>
                    <div className="text-[11px] text-orange-400 font-mono mt-1">Direct catalog sync</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Real-time conversion metrics via PostHog analytics integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Comprehensive Wilaya delivery rules and dynamic shipping surcharges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Granular staff invitation permissions via Casbin RBAC policies</span>
                  </li>
                </ul>
              </div>
            )}

            {/* External Repo Link */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Explore the open repositories under the Storesdz organization
              </span>
              <a
                href="https://github.com/Storesdz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group"
              >
                <span>View GitHub Org</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Live Interactive Sandbox / Simulation Terminal */}
          <div className="lg:col-span-5 rounded-2xl bg-[#090b10] border border-white/[0.1] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold text-zinc-300">
                    Live Engine Dispatcher
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Sandbox v1.2</span>
              </div>

              <p className="text-xs text-zinc-400 mb-6">
                Interact directly with the StoresDZ architecture simulator to observe simulated latency and runtime responses:
              </p>

              <div className="space-y-2.5 mb-6">
                <button
                  onClick={() => runSimulation('liquid')}
                  disabled={simulating}
                  className="w-full text-left p-3 rounded-xl bg-[#12151d] border border-white/[0.06] hover:border-cyan-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-cyan-400">$</span>
                    <span>bench:rust-liquid-compiler</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-cyan-400">Run</span>
                </button>

                <button
                  onClick={() => runSimulation('quote')}
                  disabled={simulating}
                  className="w-full text-left p-3 rounded-xl bg-[#12151d] border border-white/[0.06] hover:border-orange-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-orange-400">$</span>
                    <span>api:go-gin-checkout-quote</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-orange-400">Run</span>
                </button>

                <button
                  onClick={() => runSimulation('nats')}
                  disabled={simulating}
                  className="w-full text-left p-3 rounded-xl bg-[#12151d] border border-white/[0.06] hover:border-emerald-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">$</span>
                    <span>nats:event-order-broadcast</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-emerald-400">Run</span>
                </button>
              </div>
            </div>

            {/* Terminal Output Console */}
            <div className="p-4 rounded-xl bg-black border border-white/[0.08] font-mono text-xs min-h-[120px] flex flex-col justify-center">
              {simulating ? (
                <div className="flex items-center gap-2 text-cyan-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                  <span>Executing pipeline across node clusters...</span>
                </div>
              ) : simResult ? (
                <div className="text-emerald-400 leading-relaxed break-all">
                  {simResult}
                </div>
              ) : (
                <div className="text-zinc-400">
                  Click any command above to dispatch an operational benchmark across the StoresDZ stack.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default StoresDZShowcase;
