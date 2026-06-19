/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['juman-arabic-normal', 'ExpoArabic-Book', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          DEFAULT: '#2B6B3A',
          deep: '#143820',
          dark: '#16271C',
          ink: '#1B2A20',
        },
        amber: {
          brand: '#E8921A',
          dark: '#B96D0C',
          soft: '#FCEEDA',
        },
        sage: {
          50: '#F4F8F3',
          100: '#EAF3EA',
          200: '#E4F0E6',
          300: '#DCE6DD',
          400: '#B9CDBE',
          500: '#7E9685',
          600: '#5B6B5F',
          700: '#3A4A3F',
        },
      },
      keyframes: {
        gradShift: { to: { backgroundPosition: '200% center' } },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'none' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0) rotate(var(--r,0deg))' },
          '50%': { transform: 'translateY(-26px) rotate(calc(var(--r,0deg) + 8deg))' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        gradShift: 'gradShift 6s linear infinite',
        riseIn: 'riseIn .5s ease both',
        floaty: 'floaty 8s ease-in-out infinite',
        fadeUp: 'fadeUp .6s ease both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
