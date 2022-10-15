/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: '#00BFA6',
          dark: '#00b5a2',
        },
        blue: {
          light: '#00bfd6',
          medium: '#189BF2',
          dark: '#244459',
        },
        red: {
          light: '#BF3A00',
          dark: '#732300',
        },
        rose: {
          light: '#ffd8c0',
          dark: '#f7d8d9',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
