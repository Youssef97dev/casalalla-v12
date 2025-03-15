/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_black: "var(--black)",
        color_white: "var(--white)",

        text_color: "var(--text-color)",
        border_color: "var(--border-color)",
        white_color: "var(--white)",
        bg_intro: "var(--bg-intro)",
        bg_casa: "var(--bg-body)",
        bg_contact: "var(--bg-contact)",
        bg_navbar: "var(--bg-navbar)",

        background: "var(--background)",
        primary: "var(--primary)",
        primary_2: "var(--primary-2)",
        primary_3: "var(--primary-3)",
        secondary: "var(--secondary)",
        secondary_2: "var(--secondary-2)",
      },
      fontFamily: {
        rolling: ["RollingPen", "serif"],
        sackerCothic: ["Sacker-Gothics", "sans-serif"],
      },
    },
  },
  plugins: [],
};
