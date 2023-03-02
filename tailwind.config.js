/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins:
      [
          require('@tailwindcss/typography'),
          require('@tailwindcss/line-clamp'),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/forms'),
          require('tailwindcss-debug-screens'),
      ],
}
