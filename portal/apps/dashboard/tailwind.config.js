const {createGlobPatternsForDependencies} = require('@nrwl/angular/tailwind');
const {join} = require('path');
const tailwindConfig = require('../../libs/design-system/tailwind.config');

module.exports = {
  presets: [tailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
