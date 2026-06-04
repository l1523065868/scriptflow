/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#fafaf9',
        'bg-secondary': '#f5f5f4',
        'bg-tertiary': '#e7e5e4',
        'bg-card': '#ffffff',
        'accent-primary': '#a3e635',
        'accent-secondary': '#f97316',
        'accent-emotion-high': '#ef4444',
        'accent-emotion-mid': '#f59e0b',
        'accent-emotion-low': '#22c55e',
        'text-primary': '#1c1917',
        'text-secondary': '#57534e',
        'text-muted': '#a8a29e',
        'border': '#d6d3d1',
      },
      fontFamily: {
        'heading': ['"Space Grotesk"', '"Noto Sans SC"', 'sans-serif'],
        'body': ['"Inter"', '"Noto Sans SC"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.2s ease-out',
        'fade-in': 'fadeIn 0.15s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
