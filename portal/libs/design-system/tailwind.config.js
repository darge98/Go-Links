const {join} = require("path");
const {createGlobPatternsForDependencies} = require("@nrwl/angular/tailwind");
const colors = require("./colors");


module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
