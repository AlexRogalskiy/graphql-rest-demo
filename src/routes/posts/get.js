import { database } from '../../database';

export function get(req, res) {
  const posts = database.getCollection('posts');
  const { id } = req.params;

  const [post] = posts.find({ id: { '$eq': id }});

  if (!post) {
    return res.status(409).json({
      error: `Could not find post with id ${id}`
    });
  }

  return res.json(post);
}