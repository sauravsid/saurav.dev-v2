/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColor: "var(--theme-bg)",
        textColor: "var(--theme-text)",
        link: "var(--theme-link)",
        accent: "var(--theme-accent)",
        "accent-2": "var(--theme-accent-2)",
      },
      fontFamily: {
        // Add any custom fonts here
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
