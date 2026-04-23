/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yk-deepblue": "#081735",
        "yk-deepblue-light": "#0d224d",
        "yk-cherry": "#ef3914",
        "yk-cherry-hover": "#cf3111",
        "yk-success": "#10b981",
        "yk-warning": "#f59e0b",
        "yk-danger": "#f43f5e",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
