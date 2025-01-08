/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))', // 定義 24 列
      },
      gridColumn: {
        'span-19': 'span 19 / span 19',
      }
    },

    screens: {
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1366px',
    },

    container: {
      center: true,
      screens: {
        md: '720px',
        lg: '872px',
        xl: '1088px',
        xxl: '1280px',
      },
    },

    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        DEFAULT: '#A1FFC7',
        light: '#E7FFE9',
        dark: '#81F8B1',
      },
      neutral: {
        DEFAULT: '#EBEBEB',
        secondary: '#888888',
      },
    },

    fontSize: {
      sm: ['14px', '14px'],
      base: ['20px', '20px'],
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // 用於Sidebar的三角形
        '.triangle': {
          'border-top': '24px solid transparent',
          'border-right': '24px solid white',
          'border-bottom': '24px solid transparent',
        },
      })
    },
  ],
}
