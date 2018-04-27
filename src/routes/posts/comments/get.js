import { database } from '../../../database';

export function get(req, res) {
  const { commentId, id } = req.params;

  const comments = database.getCollection('comments');

  const [comment] = comments.find({ parent: { '$eq': id }, id: { '$eq': commentId }});

  if (!comment) {
    return res.status(409).json({
      error: `Could not find comment with id ${id}`
    });
  }

  return res.json(comment);
}
