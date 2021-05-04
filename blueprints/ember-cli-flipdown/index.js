/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    { name: 'flipdown' }
  ],

  addons: [
    { name: '@ember/render-modifiers' },
    { name: 'ember-moment' }
  ]
});
