/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
      extend: {
        keyframes: {
          circle: {
            '0%': { transform: 'rotate(0deg) translateY(-100px) rotate(0deg)' },
            '100%': { transform: 'rotate(360deg) translateY(-100px) rotate(-360deg)' }
          }
        },
        animation: {
          'orbit': 'circle 10s linear infinite',
        }
      },
  },
  plugins: [],
}
