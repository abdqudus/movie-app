/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    gridTemplateColumns: {
      "grid-cols": "repeat(auto-fit, minmax(240px, 1fr))",
      "70px-auto": "70px auto",
      "226px-auto": "226px auto",
      "movie-grid": "repeat(3, 1fr)",
      medium: "auto",
    },
    gridTemplateRows: {
      "movie-rows": "repeat(8,1fr)",
    },
    gridRow: {
      video: "1 / span 4",
      "cast-and-info": "5 /span 3",
      "more-btn": "5 / span 2",
      "bottom-left": "8 / span 1",
      "bottom-right": "7 / span 2",
    },
    gridColumn: {
      video: "1 / span 3",
      "more-btn": "3 / span 1",
      "cast-and-info": "1 /span 2",
      "bottom-left": "1 / span 2",
      "bottom-right": "3 / span 1",
    },
    boxSizing: {
      default: "border-box",
    },

    extend: {
      colors: {
        base: "#F8E7EB",
        secondary: "#BE123C",
      },
      backgroundColor: {
        base: "bg-[#BE123C]",
        secondary: "bg-[#F8E7EB]",
      },
      screens: {
        smallest: "250px",
      },
    },
    plugins: [],
    css: ["./custom.css"],
  },
};
