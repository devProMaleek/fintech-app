/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
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
      primaryRed: '#CF4A6A',
      primaryTextPlaceholder: '#9B9B9B',
      primaryGrayText: '#8F8F8F',
      primaryGrayIcon: '#676767',
      primaryDarkGreen: '#058C1A',
      primaryLightGreen: '#DFFFD6',
      primaryLightPurple: '#F6E4FF',
      primaryLightGrey: '#E9EBED',
      primaryDarkPurple: '#7610B5',
      primaryTextColor: '#0A2440',
      primaryLightYellow: '#FFECD3',
      primaryLightRed: '#FFE4EA',
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
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('flowbite/plugin'),
    require('tailwind-clip-path'),
    require('flowbite-react'),
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-primary(Purple|DarkPurple|Blue|TextColor|Yellow|Red|LightYellow|HighlightYellow|Green|DarkGreen|LightGreen|TextPlaceholder|GrayText|LightGrey|)/,
    },
  ],
};
