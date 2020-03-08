/**
 * Load Resources
 */
const characters = require('./characters');

/**
 * Set resources into app
 */

module.exports = app => {
  // Initialize, controllers
  // models, routes, validations
  app.context.controllers = {};
  app.context.routes = {};
  app.context.validations = {};
  // Set resources
  characters(app);
};
