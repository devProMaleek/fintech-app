/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
    './src/**/*.{js,jsx}',
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
      primaryPurple: '#E7E9FF',
      primaryYellow: '#FDC37A',
      primaryGreen: '#1E9940',
      primaryDarkGreen: '#058C1A',
      primaryLightGreen: '#DFFFD6',
      primaryDarkPurple: '#7610B5',
      primaryTextColor: '#0A2440',
      primaryLightYellow: '#FFECD3',
      primaryHighlightYellow: '#FDC37A',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      },
    },
    fontFamily: {
      nunito: ['nunito', 'sans'],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern: /(bg|text|border)-primary(Purple|DarkPurple|Blue|TextColor|Yellow|LightYellow|HighlightYellow|Green|DarkGreen|LightGreen|)/,
    },
  ],
};
