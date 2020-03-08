/**
 * Mount typical middlewares for api routes
 */

exports.mountApiRoutes = (router, routes) => {
  routes.forEach(route => {
    const middlewares = [];
    if (route.validation) middlewares.push(route.validation);
    if (route.controller) middlewares.push(route.controller);
    router[route.method.toLowerCase()](route.path, ...middlewares);
  });
};
