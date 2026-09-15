/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandpink: "#d946ef",
        brandviolet: "#7c3aed",
        brandindigo: "#4f46e5",
        carbon: "#050505",
        ink: "#0f172a",
      },
      boxShadow: {
        glow: "0 30px 100px rgba(124, 58, 237, 0.28)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
