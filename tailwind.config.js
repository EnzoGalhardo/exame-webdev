/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // para Vite
    "./src/**/*.{js,ts,jsx,tsx}" // para React
  ],
  theme: {
    extend: {
      colors: {
        hydro: {
          dark: '#03045e',
          primary: '#0077b6',
          secondary: '#00b4d8',
          light: '#caf0f8',
          textLight: '#f1f8f9',
        }
      }
    }
  },
  plugins: [],
}
