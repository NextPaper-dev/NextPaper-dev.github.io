/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        np: {
          bg: '#07080a',
          surface: '#0d0f14',
          card: '#12151d',
          'card-hover': '#161a24',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(255, 255, 255, 0.18)',
          muted: '#8b949e',
          text: '#f0f6fc',
          cyan: '#00e5ff',
          'cyan-glow': 'rgba(0, 229, 255, 0.25)',
          amber: '#ff6b00',
          'amber-glow': 'rgba(255, 107, 0, 0.25)',
          silver: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'cyan-amber-radial': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 229, 255, 0.15), rgba(255, 107, 0, 0.08), transparent 70%)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'border-beam': 'borderBeam 8s linear infinite',
        'glow-cyan': 'glowCyan 4s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        },
        glowCyan: {
          '0%': { filter: 'drop-shadow(0 0 12px rgba(0,229,255,0.3))' },
          '100%': { filter: 'drop-shadow(0 0 24px rgba(0,229,255,0.6)) drop-shadow(0 0 40px rgba(255,107,0,0.3))' },
        },
      },
    },
  },
  plugins: [],
};
