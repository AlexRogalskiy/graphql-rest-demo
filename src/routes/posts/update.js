import { database } from '../../database';

export function update(req, res) {
  const posts = database.getCollection('posts');
  const { id } = req.params;
  let [post] = posts.find({ id: { '$eq': id }});

  if (!post) {
    return res.status(409).json({
      error: `Could not find ${id}`
    });
  }

  const { body } = req;
  
  post = Object.assign(post, body);

  posts.update(post);

  return res.json(post);
}
