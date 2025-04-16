/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // <-- Make sure this points to the root file
    "./src/**/*.{html,js}" // <-- You might remove this if only index.html uses Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}