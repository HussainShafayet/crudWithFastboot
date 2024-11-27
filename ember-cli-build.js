// ember-cli-build.js
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // PostCSS options
    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'), // Ensure this points to the correct config
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};
