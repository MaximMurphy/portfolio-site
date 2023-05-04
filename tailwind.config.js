/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shift1: {
          "0%, 100%": { transform: "translateX(-1.5%)" },
          "50%": { transform: "translateX(1.5%)" },
        },
        shift2: {
          "0%, 100%": { transform: "translateX(1.5%)" },
          "50%": { transform: "translateX(-1.5%)" },
        },
      },
      colors: {
        softblue: {
          400: "#6ea0e0",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        shift1: "shift1 3s ease-in-out infinite",
        shift2: "shift2 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
