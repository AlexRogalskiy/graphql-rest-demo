import { users } from '../../database';

export function get(req, res) {
  const { id } = req.params;

  const [user] = users.find({ id: { '$eq': id }});

  if (!user) {
    return res.status(409).json({
      error: `Could not find user with id ${id}`
    });
  }

  return res.json(user);
}
