import { users as usersDb } from '../../database';

export function deleteHandler(req, res) {
  const { id } = req.params;

  usersDb.chain().find({ id: { '$eq': id }}).limit(1).remove();

  return res.json({});
}
