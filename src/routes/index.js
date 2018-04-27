import users from './users';

export default function routesHandler(app) {
  return app.use('/users', users());
}
