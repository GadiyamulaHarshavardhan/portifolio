// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'oswald': ['Oswald', 'monospace'],
      },
      colors: {
        primary: '#121212',
        accent: '#ff6b35',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}