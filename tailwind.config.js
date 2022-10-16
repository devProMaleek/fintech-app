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
      primaryDarkPurple: '#7610B5',
      primaryPurple: '#E7E9FF',
      primaryTextColor: '#0A2440',
      primaryBlue: '#152CD1',
      primaryYellow: '#FDC37A',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      },
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern: /(bg|text|border)-primary(Purple|DarkPurple|Blue|TextColor|Yellow)/,
    },
  ],
};
