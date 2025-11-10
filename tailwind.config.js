/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f9ff",
          100: "#e6f0ff",
          200: "#c2d8ff",
          300: "#9ec1ff",
          400: "#6a9eff",
          500: "#3a7bff",
          600: "#2a64db",
          700: "#1e4eb7",
          800: "#123b93",
          900: "#092875",
        },
      },
    },
  },
  plugins: [],
};
