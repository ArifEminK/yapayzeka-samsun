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
        bg2: "url('/img/background/yz41.png')",
        bg3: "url('/img/background/yz5.png')",
        bg4: "url('/img/background/yz6.png')",
        bgvideo: "url('/videos/bg_video.png')",
      },
      colors: {
        topNavBg: "#1C2A36",
        homeContBg: "#0F1A24",
        specBlue: {
          100: "#064176",
        },
      },
      fontFamily: {
        nocturne: ['"Nocturne"', "serif"],
        opensans: ['"OpenSans"', "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
