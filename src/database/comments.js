import path from 'path';

import { database } from './database';

const seed = require(path.resolve('./comments.json'));

const comments = database.addCollection('comments', { indices: ['id', 'first', 'last', 'parent']});

seed.forEach(user => {
  comments.insert(user);
});

export { comments }
