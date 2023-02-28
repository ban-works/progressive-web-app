/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ['apps/site/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'gator-green': '#36977D',
        'gator-neongreen': '#78FA4C',
        'gator-lightgreen': '#67D082',
        'gator-blue': '#170C5A',
        'gator-pink':'#EB5AD4',
        'gator-lightpink':'#F08EAB',



      },
    },
  },
  plugins: [],
};
