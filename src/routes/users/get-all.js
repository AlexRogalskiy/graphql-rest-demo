import { database } from '../../database';

export function getAll(req, res) {
  const { limit = 100, start = 0 } = req.query;
  const users = database.getCollection('users');
  return res.json({
    users: users.chain().find().simplesort('id').offset(start).limit(limit).data()
  });
}
