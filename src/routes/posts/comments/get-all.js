import { comments } from '../../../database';

export function getAll(req, res) {
  const { id } = req.params;
  return res.json({
    comments: comments.find({ parent: { '$eq': id }})
  });
}
