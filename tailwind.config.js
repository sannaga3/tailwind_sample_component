module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "top-img": "url('/public/images/top.jpg')",
        "bee-img": "url('/public/images/bee.jpg')",
      }),
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "active"],
    },
  },
};
