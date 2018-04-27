import { database } from '../../database';

export function getAll(req, res) {
  const users = database.getCollection('users');
  return res.json({
    users: users.find()
  });
}
