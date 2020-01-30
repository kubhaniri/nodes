const productsRoutes = require('./products-route');
const usersRoutes = require('./users-route');

const app1 = (app) => {
  app.use('/api/v1/users/', usersRoutes);
  app.use('/api/v1/products/', productsRoutes);
};

module.exports = app1;
