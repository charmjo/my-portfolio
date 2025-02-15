/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sacramento: ["Sacramento","cursive"],
      sans: ['Montserrat', 'sans-serif'], 
    },
    extend: {
      colors: {
        'aqua-haze': {
          '50': '#f1f7f5',
          '100': '#dbece6',
          '200': '#b7d8cf',
          '300': '#8bbdb0',
          '400': '#639e91',
          '500': '#498377',
          '600': '#38695f',
          '700': '#30554e',
          '800': '#2a4540',
          '900': '#263b38',
          '950': '#12211f',
        },
        'azalea': {
          '50': '#fbf4f7',
          '100': '#f8ebf0',
          '200': '#f3d7e3',
          '300': '#ecbdcf',
          '400': '#dc8aa8',
          '500': '#ce6688',
          '600': '#ba4869',
          '700': '#a03651',
          '800': '#852f44',
          '900': '#6f2c3c',
          '950': '#43141f',
        },
        'maroon-flush': {
          '50': '#fdf2f7',
          '100': '#fce7f2',
          '200': '#fccee5',
          '300': '#faa7cf',
          '400': '#f670ae',
          '500': '#ee468f',
          '600': '#dd256d',
          '700': '#c01653',
          '800': '#9f1545',
          '900': '#84173d',
          '950': '#510620',
        },
        'maroon-oak': {
          '50': '#fff0f0',
          '100': '#ffe2e2',
          '200': '#ffcacc',
          '300': '#ff9ea3',
          '400': '#ff6773',
          '500': '#ff3248',
          '600': '#ef0f31',
          '700': '#ca0628',
          '800': '#a9082a',
          '900': '#900b2b',
          '950': '#500011',
        },
        'waiouru': {
          '50': '#fdfae8',
          '100': '#f9f5ce',
          '200': '#f4eda2',
          '300': '#ebe46b',
          '400': '#ddd63e',
          '500': '#c3bf1f',
          '600': '#9b9a15',
          '700': '#757615',
          '800': '#5c5e16',
          '900': '#464815',
          '950': '#2a2c07',
        }
      },
      backgroundImage: {
        "hero_background": "url('/public/assets/img/hero_cherry_blossom.jpg')",
      }
    },
  },
  plugins: []
}

