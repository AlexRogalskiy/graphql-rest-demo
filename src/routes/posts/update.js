import { posts } from '../../database';

export function update(req, res) {
  const { id } = req.params;
  const [post] = posts.find({ id: { '$eq': id }});

  if (!post) {
    return res.status(409).json({
      error: `Could not find ${id}`
    });
  }

  const { body } = req;
  console.log(body);

  return res.json({});
}
