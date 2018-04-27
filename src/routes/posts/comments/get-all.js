import { database } from '../../../database';

export function getAll(req, res) {
  const comments = database.getCollection('comments');
  const { id } = req.params;
  return res.json({
    comments: comments.find({ parent: { '$eq': id }})
  });
}
