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
        shiftSide1: {
          "0%, 100%": { transform: "translateX(-1.5%)" },
          "50%": { transform: "translateX(1.5%)" },
        },
        shiftSide2: {
          "0%, 100%": { transform: "translateX(1.5%)" },
          "50%": { transform: "translateX(-1.5%)" },
        },
        shiftUp1: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(-5%)" },
        },
        shiftUp2: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(-5%)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(120%)" },
          "50%": { transform: "scale(100%)" },
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
        shiftSide1: "shiftSide1 3s ease-in-out infinite",
        shiftSide2: "shiftSide2 3s ease-in-out infinite",
        shiftUp1: "shiftUp1 3s ease-in-out infinite",
        shiftUp2: "shiftUp2 3s ease-in-out infinite",
        scale: "scale 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
