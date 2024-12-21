/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4E0AF',
        secundary: '#F9C0AB',
        tertiary: '#D9EAFD',
        quaternary: '#81BFDA',
        black: '#000000',
        white: '#ffffff'
      },
      fontFamily: {
        geo: ['Geologica', 'sans-serif'],
      },
      fontSize: {
        label: '0.8125em',
        normal: '1rem',
        hero: '1.2rem',
      },
    },
  },
  plugins: [],
}