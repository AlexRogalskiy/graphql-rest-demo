import faker from 'faker';
import { database } from '../../database';
import { USER } from '../../schema';

export async function post(req, res) {
  try {
    const users = database.getCollection('users');
    let user = await USER.validate(req.body);

    user.id = faker.random.uuid();

    users.insert(user);

    return res.json(user);
  } catch (e) {
    console.warn(e);
    return res.status(400).json({
      error: e
    });
  }
}
