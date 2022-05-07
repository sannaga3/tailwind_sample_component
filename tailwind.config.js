module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "top-img": "url('/public/images/top.jpg')",
        "bee-img": "url('/public/images/bee.jpg')",
      }),
      animation: {
        rotateY: "rotateY 2s linear infinite",
      },
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "2px -2px 2px rgba(0,0,0,0.3)",
        },
        ".text-shadow-md": {
          textShadow: "3px -3px 3px rgba(0,0,0,0.6)",
        },
        ".text-shadow-lg": {
          textShadow: "4px -8px 4px rgba(0,0,0,0.9)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "active"],
    },
  },
};
