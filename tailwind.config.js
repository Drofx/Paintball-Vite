/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}","./components/**/*.{ts,tsx,js,jsx}","./containers/**/*.{ts,tsx,js,jsx}","./pages/**/*.{ts,tsx,js,jsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      brightness: {
        25: '.15',
        175: '1.75',
      },
      colors: {
          'merge': '#60332c',
      },
      width:{
        '128':'105rem'
      },
      maxWidth:{
        '128':'80rem'
      },
    },
  },
  plugins: [],
}

