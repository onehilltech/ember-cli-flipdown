'use strict';

module.exports = {
  name: require('./package').name,

  included (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/flipdown/dist/flipdown.js',
      production: 'node_modules/flipdown/dist/flipdown.min.js'
    });

    app.import ({
      development: 'node_modules/flipdown/dist/flipdown.css',
      production: 'node_modules/flipdown/dist/flipdown.min.css'
    });
  },
};
