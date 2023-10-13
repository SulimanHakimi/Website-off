/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    backgroundImage: {
      afg: "url('https://dims.apnews.com/dims4/default/e48c917/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fc3cc46c016bb4665924c529836816192%2F3000.jpeg')",
      histor:
        "url('https://c4.wallpaperflare.com/wallpaper/847/108/967/mountains-dark-ravine-snow-wallpaper-preview.jpg')",
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
