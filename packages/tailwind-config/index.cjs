/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "../../apps/web/app/**/*.{js,ts,jsx,tsx}",
    "../../apps/docs/app/**/*.{js,ts,jsx,tsx}",
    "../../apps/snippet-manager/app/**/*.{js,ts,jsx,tsx}",
    // ⬇️ КЛЮЧЕВАЯ ПРАВКА
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
