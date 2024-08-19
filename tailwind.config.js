/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bluetone":"#2E3192",
        "greentone":"#1BFFFF",
      }
    },
    screens:{
      "phone":"0px",
      "phonehori":"480px",
      "tab":"767px",
      "tabhori":"979px",
      "pc":"1200px"

    },
    backdropBlur: {
      '30': '30px',
    },
    boxShadow: {
      'custom-drop-shadow': '1px 1px 20px rgb(253 253 1)',
    },
  },
  plugins: [],
}

