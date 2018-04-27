import { database } from '../../database';

export function deleteHandler(req, res) {
  const posts = database.getCollection('posts');
  const comments = database.getCollection('comments');
  const { id } = req.params;

  posts.chain().find({ id: { '$eq': id }}).limit(1).remove();
  comments.chain().find({ parent: { '$eq': id }}).remove();

  return res.json({});
}
