import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const TYPOGRAPHY_BODY = {
  fontSize: '0.75rem',
  lineHeight: '140%',
  letterSpacing: '-0.01em',
  '@media (min-width: theme("screens.md"))': {
    fontSize: '0.875rem',
  },
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      navy: '#012D70',
      white: '#FFFFFF',
      orange: '#FA4616',
      grey: '#F5F5F5',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    typography: (theme: PluginAPI['theme']) => ({
      DEFAULT: {
        css: {
          maxWidth: null,
          color: theme('colors.black'),
          h1: {
            fontSize: '1.125rem',
            lineHeight: 'normal',
            letterSpacing: '0em',
            '@media (min-width: theme("screens.md"))': {
              fontSize: '1.75rem',
              letterSpacing: '-0.04em',
            },
          },
          h2: {
            fontSize: '0.875rem',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
            '@media (min-width: theme("screens.md"))': {
              fontSize: '1.125rem',
              letterSpacing: '0em',
            },
          },
          p: TYPOGRAPHY_BODY,
          input: TYPOGRAPHY_BODY,
          button: TYPOGRAPHY_BODY,
          a: TYPOGRAPHY_BODY,
          small: {
            fontSize: '0.75rem',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
          },
          'x-small': {
            fontSize: '0.625rem',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
          },
        },
      },
    })
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
