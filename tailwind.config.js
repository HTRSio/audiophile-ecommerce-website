/** @type {import('tailwindcss').Config} */
import tailwindTypogrphy from '@tailwindcss/typography'
import tailwindLineClamp from '@tailwindcss/line-clamp'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import tailwindForms from '@tailwindcss/forms'
import tailwindDebugScreens from 'tailwindcss-debug-screens'

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Manrope', defaultTheme.fontFamily.sans],
    },
    colors: {
      'primary': '#D87D4A',
      'black-one': '#101010',
      'gray': '#F1F1F1',
      'gray-light': '#FAFAfA',
      'secondary': '#FBAF85',
      'white': '#FFFFFF',
      'black': '#000000',
      'tenth': '#979797',
      'overlay': '#191919',
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1110px',
    },

    extend: {
      fontSize: {
        56: [
          '3.5rem',
          {
            lineHeight: '3.625rem',
            letterSpacing: '0.125rem',
          },
        ],
        40: [
          '2.5rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '0.0937rem',
          },
        ],
        32: [
          '2rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '0.0718rem',
          },
        ],
        28: [
          '1.75rem',
          {
            lineHeight: '2.375rem',
            letterSpacing: '0.125rem',
          },
        ],
        24: [
          '1.5rem',
          {
            lineHeight: '2.0625rem',
            letterSpacing: '0.1062rem',
          },
        ],
        18: [
          '1.124rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.0812rem',
          },
        ],
        15: [
          '0.9375rem',
          {
            lineHeight: '1.5625rem',
          },
        ],
        14: [
          '0.875rem',
          {
            lineHeight: '1.1975rem',
            letterSpacing: '0.6250rem',
          },
        ],
        13: [
          '0.8125rem',
          {
            lineHeight: '1.5625rem',
          },
        ],
      },
      letterSpacing: {
        1: '0.0625em',
        2: '0.1250em',
      },
    },
  },
  plugins: [
    tailwindTypogrphy,
    tailwindLineClamp,
    tailwindAspectRatio,
    tailwindForms,
    tailwindDebugScreens,
  ],
}
