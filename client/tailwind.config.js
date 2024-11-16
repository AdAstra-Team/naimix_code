/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["28px", "32px"],
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: "#9A9A9A",
      orange: "#FF9929",
      red: "#F25430",
      teal: "#0E6666",
      "teal-container": "#F0F6FA",
      iridium: "#7B92A4",
      purple: "#9747FF",
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "12px",
    },
  },
  plugins: [],
};
