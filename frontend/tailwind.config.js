/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'orbg': '#ff5945',
        'inbg': '#d5d7dc',
      },
      borderRadius: {
        'bround': '40px',
      },
      textColor: {
        'orbg': '#ff5945',
      },
    },
  },
  plugins: [],
};
