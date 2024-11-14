/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA89C",
        secondary: "#0E73B9",
      },
      boxShadow: {
        "custom-blue": "0 2px 8px rgba(45, 156, 219, 0.6)",
      },

      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
