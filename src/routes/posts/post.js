import faker from 'faker';
import { database } from '../../database';
import { POST } from '../../schema';

export async function post(req, res) {
  try {
    const posts = database.getCollection('posts');
    let postToAdd = await POST.validate(req.body);

    postToAdd.id = faker.random.uuid();

    posts.insert(postToAdd);

    return res.json(postToAdd);
  } catch (e) {
    console.warn(e);
    return res.status(400).json({
      error: e
    });
  }
}
