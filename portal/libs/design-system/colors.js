const colors = require("tailwindcss/colors");
// https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
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
