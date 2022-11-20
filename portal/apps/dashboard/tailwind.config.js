const {createGlobPatternsForDependencies} = require('@nrwl/angular/tailwind');
const {join} = require('path');
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      dark: colors.slate,

      error: colors.rose,
      warning: colors.amber,
      success: colors.emerald,

      primary: {
        50: 'hsl(var(--color-primary-50) / <alpha-value>)',
        100: 'hsl(var(--color-primary-100) / <alpha-value>)',
        200: 'hsl(var(--color-primary-200) / <alpha-value>)',
        300: 'hsl(var(--color-primary-300) / <alpha-value>)',
        400: 'hsl(var(--color-primary-400) / <alpha-value>)',
        500: 'hsl(var(--color-primary-500) / <alpha-value>)',
        600: 'hsl(var(--color-primary-600) / <alpha-value>)',
        700: 'hsl(var(--color-primary-700) / <alpha-value>)',
        800: 'hsl(var(--color-primary-800) / <alpha-value>)',
        900: 'hsl(var(--color-primary-900) / <alpha-value>)',
      },
      accent: colors.purple,
      // accent: {
      //   50: 'hsl(var(--color-accent-50) / <alpha-value>)',
      //   100: 'hsl(var(--color-accent-100) / <alpha-value>)',
      //   200: 'hsl(var(--color-accent-200) / <alpha-value>)',
      //   300: 'hsl(var(--color-accent-300) / <alpha-value>)',
      //   400: 'hsl(var(--color-accent-400) / <alpha-value>)',
      //   500: 'hsl(var(--color-accent-500) / <alpha-value>)',
      //   600: 'hsl(var(--color-accent-600) / <alpha-value>)',
      //   700: 'hsl(var(--color-accent-700) / <alpha-value>)',
      //   800: 'hsl(var(--color-accent-800) / <alpha-value>)',
      //   900: 'hsl(var(--color-accent-900) / <alpha-value>)',
      // },
      neutral: {
        50: 'hsl(var(--color-neutral-50) / <alpha-value>)',
        100: 'hsl(var(--color-neutral-100) / <alpha-value>)',
        200: 'hsl(var(--color-neutral-200) / <alpha-value>)',
        300: 'hsl(var(--color-neutral-300) / <alpha-value>)',
        400: 'hsl(var(--color-neutral-400) / <alpha-value>)',
        500: 'hsl(var(--color-neutral-500) / <alpha-value>)',
        600: 'hsl(var(--color-neutral-600) / <alpha-value>)',
        700: 'hsl(var(--color-neutral-700) / <alpha-value>)',
        800: 'hsl(var(--color-neutral-800) / <alpha-value>)',
        900: 'hsl(var(--color-neutral-900) / <alpha-value>)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
