/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1a2238',
        secondary: '#9daaf2',
        accent: '#ff006e',
        glass: 'rgba(255,255,255,0.7)',
        darkGlass: 'rgba(26,34,56,0.7)',
      },
    },
  },
  plugins: [],
};
