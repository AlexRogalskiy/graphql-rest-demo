import { database } from '../../../database';

export function getAll(req, res) {
  const { id } = req.params;
  const { limit = 100, start = 0 } = req.query;
  const comments = database.getCollection('comments');
  return res.json({
    comments: comments.chain().find({ parent: { '$eq': id }}).limit(limit).offset(start).data()
  });
}
