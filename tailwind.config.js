/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        legalBlue: '#3B82F6',
        legalOrange: '#F97316',
        legalNavy: '#1E1B4B',
        legalPurple: '#6D28D9',
        legalGray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
        }
      },
    },
  },
  plugins: [],
}
