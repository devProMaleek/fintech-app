/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
    './src/**/*.{js,jsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      primaryBlue: '#152CD1',
      primaryYellow: '#FDC37A',
      primaryPurple: '#E7E9FF',
      primaryGreen: '#1E9940',
      primaryTextPlaceholder: '#9B9B9B',
      primaryGrayText: '#8F8F8F',
      primaryDarkGreen: '#058C1A',
      primaryLightGreen: '#DFFFD6',
      primaryLightGrey: '#E9EBED',
      primaryDarkPurple: '#7610B5',
      primaryTextColor: '#0A2440',
      primaryLightYellow: '#FFECD3',
      primaryHighlightYellow: '#FDC37A',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      },
    },
    clipPath: {
      mypolygon:
        'polygon(, 1% 0%1% 0%, 1% 100%, 1% 100%, 99% 100%, 99% 100%, 100% 1%, 100% 1%, 38% 0, 44% 8%, 62% 1%, 56% 8%, );',
    },
    fontFamily: {
      nunito: ['nunito', 'sans'],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require('tailwind-clip-path'), require('flowbite-react')],
  safelist: [
    {
      pattern:
        /(bg|text|border)-primary(Purple|DarkPurple|Blue|TextColor|Yellow|LightYellow|HighlightYellow|Green|DarkGreen|LightGreen|TextPlaceholder|GrayText|LightGrey|)/,
    },
  ],
};
