/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },boxShadow: {
        'thick-between': '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
    },

  },
  plugins: [],
}

