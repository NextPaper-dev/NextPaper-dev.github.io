/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-dark': '#131416',
        'background-light': '#F8F9FA',
        'surface': '#1E1F22',
        'surface-light': '#FFFFFF',
        'primary-container': '#4d8efe',
        'primary': '#adc6ff',
        'tertiary': '#fbbc06',
        'tertiary-fixed-dim': '#fbbc06',
        'outline-variant': '#424753',
        'outline': '#8c909f',
        'text-light-primary': '#202124',
        'on-surface-variant': '#c2c6d5',
        'emerald-accent': '#89fa9b',
        'storesdz-blue': '#2563eb',
        'storesdz-dark': '#0b0f19',
      },
      fontFamily: {
        sans: ['"Roboto Flex"', 'Inter', '-apple-system', 'sans-serif'],
        display: ['"Roboto Flex"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(77, 142, 254, 0.4)',
        'glow-tertiary': '0 0 25px -5px rgba(251, 188, 6, 0.35)',
      },
    },
  },
  plugins: [],
};
