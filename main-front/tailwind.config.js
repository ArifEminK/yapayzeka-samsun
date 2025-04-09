/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/img/background/yz4.png')",
        bg2:"url('/img/background/yz41.png')",
        bg3:"url('/img/background/yz5.png')",
        bg4:"url('/img/background/yz6.png')",
      },
    },
  },
  plugins: [],
};
