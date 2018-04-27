import { users as usersDb } from '../../database';

export function update(req, res) {
  const { id } = req.params;
  const [user] = usersDb.where(user => user.id === id);

  if (!user) {
    return res.status(409).json({
      error: `Could not find ${id}`
    });
  }

  const { body } = req;
  console.log(body);

  return res.json({});
}
