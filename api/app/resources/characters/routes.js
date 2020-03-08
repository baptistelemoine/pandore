/**
 * Module dependencies
 */
const Router = require('koa-router');

/**
 * Mount characters routes
 */
module.exports = app => {
  const router = new Router({ prefix: '/characters' });
  const routes = [
    {
      method: 'GET',
      path: '/',
      validation: app.context.validations.characters.getAll,
      controller: app.context.controllers.characters.getAll
    },
    {
      method: 'GET',
      path: '/:id',
      validation: app.context.validations.characters.getOne,
      controller: app.context.controllers.characters.getOne
    }
  ];
  const routesHelper = app.context.helpers.routes;
  routesHelper.mountApiRoutes(router, routes);
  return router;
};
