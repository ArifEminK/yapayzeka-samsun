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
        bg1: "url('/img/background/yapayzeka-nedir.png')",
        bg2: "url('/img/background/ai-safety.png')",
        bg3: "url('/img/background/using.png')",
        bg4: "url('/img/background/ai-historybg.png')",
        bg5: "url('/img/contentimg/whatsai.png')",
      },
      colors: {
        topNavBg: "var(--color-topNavBg)",
        homeContBg: "var(--color-homeContBg)",
        specBlue: "var(--color-specBlue)",
        textColor: "var(--color-textColor)",
        defBg: "#1C2A36",
        borderColor: "#70777F",
      },
      fontFamily: {
        nocturne: ['"Nocturne"', "serif"],
        opensans: ['"OpenSans"', "sans-serif"],
        code: ['"PressStart2P"', "sans-serif"],
        PTSans: ['"PTSans"', "sans"],
        PTSerif: ['"PTSerif"', "serif"],
      },
      textShadow: {
        light: "1px 1px 3px rgba(255, 255, 255, 0.8)",
        dark: "1px 1px 3px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  safelist: ["bg-bg1", "bg-bg2", "bg-bg3", "bg-bg4", "bg-bg5"],
  plugins: [require("@tailwindcss/line-clamp")],
};
