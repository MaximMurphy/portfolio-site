/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neue: "28px 28px 56px #121d42, -28px -28px 56px #1c2d66",
        neueInset:
          "inset 20px 20px 60px #121d42, inset -20px -20px 60px #1c2d66",
      },
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
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shiftUp2: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(10%)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(120%)" },
          "50%": { transform: "scale(100%)" },
        },
        bounceAround: {
          "0%, 100%": {
            transform: "translateY(-100px)",
          },
          "50%": {
            transform: "translateY(-1775px)",
          },
        },
        sideToSide: {
          "0%, 100%": {
            transform: "translateX(250%)",
          },
          "50%": {
            transform: "translateX(-250%)",
          },
        },
        sideToSide2: {
          "0%, 100%": {
            transform: "translateX(80%)",
          },
          "50%": {
            transform: "translateX(-80%)",
          },
        },
      },
      colors: {
        softblue: {
          400: "#6ea0e0",
          600: "#6c87ab",
          800: "#617185",
        },
        offwhite: {
          400: "#fffaf4",
          600: "#eae3dc",
          800: "#d5ccc2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        shiftSide1: "shiftSide1 6s ease-in-out infinite",
        shiftSide2: "shiftSide2 6s ease-in-out infinite",
        shiftUp1: "shiftUp1 5s ease-in-out infinite",
        shiftUp2: "shiftUp2 5s ease-in-out infinite",
        scale: "scale 3s ease-in-out infinite",
        bounceAround: "bounceAround 10s ease-in-out infinite",
        sideToSide: "sideToSide 10s ease-in-out infinite",
        sideToSide2: "sideToSide2 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
