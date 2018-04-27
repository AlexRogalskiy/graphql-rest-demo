import { posts } from '../../database';

export function getAll(req, res) {
  return res.json({
    posts: posts.find()
  });
}
