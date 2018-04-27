import path from 'path';

import { database } from './database';

const seed = require(path.resolve('./users.json'));

const users = database.addCollection('users', { indices: ['email', 'name', 'id']});

seed.forEach(user => {
  users.insert(user);
});

export { users }
