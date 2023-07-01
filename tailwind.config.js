


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSansJP: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        'primary-gray': '#BDCDD6',
      }
    },
  },
  plugins: [],
}