/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
        "bounce-opposite": "bounce-opposite 3s linear infinite",
        "fade-in": "fade-in 1s linear",
        "slide-right": "slide-right 5s ease",
        "slide-left": "slide-left 5s ease",
        "slide-up": "slide-up 5s linear",
        "slide-down": "slide-down 5s linear",
        "scale-slide-up": "scale-slide-up 3s linear",
      },
      keyframes: {
        "bounce-opposite": {
          "0%, 100%": {
            transform: "translateY(10px)",
            "animation-timing-function": "ease",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "ease",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
          "slide-down": {
            "0%": { transform: "translateY(-100%)" },
            "100%": { transform: "translateY(0)" },
          },
          "scale-slide-up": {
            "0%": {
              transform: "scale(0%) translateY(10%)",
              opacity: 0,
            },
            "100%": {
              transform: "scale(1) translateY(0%)",
              opacity: 1,
            },
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
