/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024',
        xl: '1280',
        xxl: '1536'
      },
      fontFamily: {
        roboto: 'Roboto'
      }
    },
  },
  plugins: [],
  prefix: 'tw-',
  important: true
}

