import { users as usersDb } from '../../database';
import { USER } from '../../schema';

export async function put(req, res) {
  const user = await USER.validate(req.body);
  return res.json({
    id: '1234'
  });
}
