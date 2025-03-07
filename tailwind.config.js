/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zephyr': {
          mint: '#A6CEC7',  // Blue color
          ashbrown: '#6e5c4f',  // Brown for headings
          background: '#F0E8E3',  // Background color
          gray: '#e6e6e6',
        }
      },
      backgroundColor: {
        'page-background': '#F0E8E3'
      },
      textColor: {
        'primary': '#6e5c4f',  // Brown for primary text
      },
      fontFamily: {
        'sans': ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
}