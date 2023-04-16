module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tahoma': ['tahoma', 'sans-serif'],
      },
      colors: {
        light: "#ddffdd",
        primary: "#30d5c8",
        secondary: "#4fcb7f",
        tertiary: "#00FF00",
        dark: "#006d5b",
      },
      aspectRatio: {
        mobile: '4 / 3',
        desktop: '16 / 9',
      },
    },
  },
  plugins: [],
}


// 30d5c8