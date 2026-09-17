/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          dark: '#0B0F19',
          card: '#111827'
        }
      }
    },
  },
  plugins: [],
}