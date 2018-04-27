import { users as usersDb } from '../../database';

export function get(req, res) {
  const { id } = req.params;

  const [user] = usersDb.find({ id: { '$eq': id }});

  if (!user) {
    return res.status(409).json({
      error: `Could not find user with id ${id}`
    });
  }

  return res.json(user);
}