/**
 * Resource dependencies
 */

const routes = require('./routes');
const controller = require('./controller');
const validations = require('./validations');

/**
 * Load resource
 */

module.exports = app => {
  app.context.controllers.characters = controller;
  app.context.validations.characters = validations;
  app.context.routes.characters = routes(app);
};
