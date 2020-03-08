/**
 * Helpers dependencies
 */

const routes = require('./routes');
const utils = require('./utils');

/**
 * Load helpers
 */

module.exports = app => {
  app.context.helpers = {
    routes,
    utils
  };
};
