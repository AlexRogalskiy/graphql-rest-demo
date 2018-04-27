import path from 'path';

import { database } from './database';

const seed = require(path.resolve('./posts.json'));

const posts = database.addCollection('posts', { indices: ['id', 'email', 'user']});

seed.forEach(user => {
  posts.insert(user);
});

export { posts }
