/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#1a1a1a',
          900: '#222222',
          850: '#2a2a2a',
          800: '#333333',
          750: '#3a3a3a',
          700: '#444444',
          600: '#595959',
        },
        accent: {
          50: '#eef7f0',
          100: '#d6ebda',
          200: '#b8dcbf',
          300: '#9bcfa4',
          400: '#91c499',
          500: '#7ab584',
          600: '#5e9a68',
          700: '#4a7d52',
          800: '#3a6340',
          900: '#2e4f33',
        },
        sage: {
          50: '#f0f5ee',
          100: '#d8e8d2',
          200: '#b0d1a4',
          300: '#c2d7bb',
          400: '#a8c9a0',
          500: '#808f85',
          600: '#6a7a70',
          700: '#56655c',
          800: '#445049',
          900: '#353e3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
