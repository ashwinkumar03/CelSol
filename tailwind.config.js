/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e3e6df',
          200: '#c5ccbc',
          300: '#a7b39a',
          400: '#89997c',
          500: '#6b7f5e',
          600: '#57664c',
          700: '#424c3a',
          800: '#2e3328',
          900: '#1a1916',
        },
      },
    },
  },
  plugins: [],
};