/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./src/**/*.{svelte,js,ts}",
    "./index.html",
    "./node_modules/@prismicio/svelte/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
