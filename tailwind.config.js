/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "F4D0C4",
        bgProductCard: "F3F3F3",
        lightGreen: "#e8f5de",
        lightPink: "#f7ecee",
        lightGray: "#E1EAEE",
        lightYellow: "#ffffe1",
        darkGreen: "#d9eec8",
        darkPink: "#f2e0e2",
        darkGray: "#9ea4a7",
        darkYellow: "#ffffc2",
        mid: "white",
      },
      fontFamily: {
        ebgm: ["'EB Garamond'", "'sans - serif'"],
        zilla: ["'Zilla Slab'", "' sans-serif'"],
      },
    },
  },
  plugins: [],
};
