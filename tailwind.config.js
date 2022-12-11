/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-yellow': '#F4F2EA',
      'orange': '#E6AA50',
      'yellow': '#E1C271',
      'brown': '#A96922',
      'dark-teal': '#1C7262',
      'dark-green': '#114B47',
      'black': '#000000',
      'transparent': 'transparent',
    },
    extend: {},
  },
  plugins: [],
}
