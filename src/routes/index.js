import posts from './posts';
import users from './users';

export default function routesHandler(app) {
  return app
    .use('/posts', posts())
    .use('/users', users());
}
