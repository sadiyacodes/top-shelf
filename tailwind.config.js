/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F4D0C4",
        bgProductCard: "#F3F3F3",
        cartcolor: "#c0392b",
        mid: "white",
        brandred: "#FF3131",
        interactiveBtn: "#E093B2",
        lightpink: "#FCF1ED",
      },
      fontFamily: {
        ebgm: ["'Libre Baskerville'", "'sans-serif'"],
        zilla: ["'Zilla Slab'", "' sans-serif'"],
      },
    },
  },
  plugins: [],
};
