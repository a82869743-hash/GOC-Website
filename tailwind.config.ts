import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        carbon: "#111111",
        goc: {
          red: "#FF1E1E",
          black: "#0A0A0A",
          neon: "#00F0FF",
          dark: "#0A0A0A"
        }
      },
      backgroundImage: {
        'goc-dark': 'linear-gradient(135deg, #0A0A0A 0%, #0D0D0D 100%)',
        'goc-button': 'linear-gradient(90deg, #FF1E1E, #B30000)'
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        shineSwipe: {
          '0%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-50% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        gradientGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        shineSwipe: 'shineSwipe 4s ease-in-out infinite',
        pulseRing: 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        gradientGlow: 'gradientGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
