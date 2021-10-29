const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  plugins: [require('@tailwindcss/line-clamp')],
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.blueGray,
        lime: colors.lime,
        orange: colors.orange,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet
      }
    }
  },
  variants: {
    extend: {}
  }
}
