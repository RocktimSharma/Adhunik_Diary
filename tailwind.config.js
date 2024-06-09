/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          10: "#0d0d0d",
          20:"#121212",
          30: "#262626",
          40: "#404040",
          50: "#737373",
          60: "#8c8c8c",
          70: "#a6a6a6",
          80: "#bfbfbf",
          90: "#d9d9d9",
        },
        blue: {
          10: "#00091a",
          20: "#001c4d",
          30: "#002e80",
          40: "#2272ff",
          // 40: "#e91e63",
          50: "#0053e6",
          60: "#1a6dff",
          70: "#4d8dff",
          80: "#80aeff",
          90: "#e5efff",
        },
        accent:{
          // 10:'#e91e63',
          10:'#000000',
          20:'#7C83FD',
          30: "#7C83FD"
        }
      },
    },
  },

  plugins: [],
};
