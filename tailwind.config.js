/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    backgroundImage: {
      histor:
        "url('https://c4.wallpaperflare.com/wallpaper/847/108/967/mountains-dark-ravine-snow-wallpaper-preview.jpg')",
      main: "url('./assets/img/scattered-forcefields.svg')",
    },
    screens: {
      mobile: "375px",
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
