import { database } from '../../database';

export function getAll(req, res) {
  const { limit = 100, start = 0 } = req.query;
  const posts = database.getCollection('posts');
  return res.json({
    posts: posts.chain().find().simplesort('id').offset(start).limit(limit).data()
  });
}
