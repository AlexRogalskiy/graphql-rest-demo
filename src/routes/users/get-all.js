import { users as usersDb } from '../../database';

export function getAll(req, res) {
  return res.json({
    users: usersDb.find()
  });
}
