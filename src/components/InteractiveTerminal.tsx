import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'nextpaper info',
      output: (
        <div className="space-y-1">
          <p className="text-cyan-400 font-bold">NEXTPAPER.DEV // Systems Engineering Studio</p>
          <p className="text-zinc-300">Flagship: StoresDZ (High-performance multi-tenant commerce)</p>
          <p className="text-zinc-400">Stack: Go 1.22, Rust Actix/Axum, React 19, Astro, PostgreSQL, NATS, Tailwind</p>
          <p className="text-zinc-500 text-xs">Type "help" to see available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-zinc-300">
            <p><span className="text-cyan-400">storesdz</span> — Details on flagship multi-tenant platform</p>
            <p><span className="text-cyan-400">bench</span> — Run latency benchmark across Go & Rust engines</p>
            <p><span className="text-cyan-400">stack</span> — Core technologies & libraries used by NextPaper</p>
            <p><span className="text-cyan-400">contact</span> — Get in touch for custom engineering engagements</p>
            <p><span className="text-cyan-400">clear</span> — Clear the terminal window</p>
          </div>
        );
        break;
      case 'storesdz':
        response = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-orange-400 font-bold">StoresDZ Platform Summary:</p>
            <p>• Backend: Go 1.22 (Gin, sqlc, pgx pool, Casbin RBAC)</p>
            <p>• Edge Engine: Rust Liquid template compiler (sub-millisecond static HTML)</p>
            <p>• Storefront Runtime: 12KB zero-dependency browser SDK</p>
            <p>• Target Market: High-conversion e-commerce with Algeria Wilaya carrier matrices</p>
            <p className="text-zinc-400 text-xs">Explore: https://github.com/Storesdz</p>
          </div>
        );
        break;
      case 'bench':
        response = (
          <div className="space-y-1 text-zinc-300 font-mono">
            <p className="text-emerald-400">▶ Executing 10,000 synthetic operations...</p>
            <p>✔ Rust Liquid AST Compile: <span className="text-cyan-300 font-bold">0.74ms</span> (p99)</p>
            <p>✔ Go API Ingestion Throughput: <span className="text-cyan-300 font-bold">26,100 req/s</span></p>
            <p>✔ NATS JetStream Publish ACK: <span className="text-cyan-300 font-bold">0.32ms</span></p>
            <p>✔ Funnel SDK Handshake: <span className="text-cyan-300 font-bold">14ms total load</span></p>
          </div>
        );
        break;
      case 'stack':
        response = (
          <div className="text-zinc-300">
            Languages: Go, Rust, TypeScript, SQL, HTML/CSS<br />
            Frameworks: Astro, React, Gin, Actix, Tailwind, Next.js<br />
            Infrastructure: Docker, PostgreSQL, Redis, NATS, AWS S3/SES
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-zinc-300 space-y-1">
            <p>Reach out directly to the NextPaper engineering team:</p>
            <p className="text-cyan-400 font-bold">Email: contact@nextpaper.dev / rafafaycal@gmail.com</p>
            <p className="text-zinc-400 text-xs">GitHub: https://github.com/NextPaper-dev</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        response = (
          <p className="text-red-400">
            Command not recognized: "{cmd}". Type <span className="text-cyan-300 underline">help</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output: response }]);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-24 relative border-t border-white/[0.06] bg-[#07080a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Developer Console
          </h2>
          <p className="text-zinc-400 text-sm">
            Execute commands directly against NextPaper's systems telemetry.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#0c0e14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#12151d] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-2 text-xs text-zinc-400">agy://nextpaper.dev/sh</span>
            </div>
            <div className="text-[10px] text-zinc-500">BASH 5.2</div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-cyan-400 font-bold">user@nextpaper:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/[0.08] text-zinc-300">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Line */}
          <form onSubmit={handleCommand} className="p-3 bg-[#090b10] border-t border-white/[0.08] flex items-center gap-2">
            <span className="text-cyan-400 font-bold pl-2">user@nextpaper:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Try 'storesdz', 'bench', or 'help'..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-zinc-600 focus:ring-0"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
export default InteractiveTerminal;
