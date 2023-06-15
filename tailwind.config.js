/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          charcoal: "#181818",
          midnight: "#121212",

          full: "#000000",
        },
        blue: {
          eggplant: "#211246",
        },
        gray: {
          mist: "#a7a7a7",
          slate: "#272727",
        },
        green: {
          lime: "#1ed760",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, rgba(33,18,70,1) 0%, rgba(18,18,18,1) 100%)",
      },
    },
  },
  plugins: [],
};
