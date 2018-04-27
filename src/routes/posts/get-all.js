import { database } from '../../database';

export function getAll(req, res) {
  const posts = database.getColllection('posts');
  return res.json({
    posts: posts.find()
  });
}
