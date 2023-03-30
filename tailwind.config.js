module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ddffdd",
        primary: "#1c984e",
        secondary: "#4fcb7f",
        tertiary: "#00FF00",
        dark: "#003300",
      },
      aspectRatio: {
        mobile: '4 / 3',
        desktop: '16 / 9',
      },
    },
  },
  plugins: [],
}