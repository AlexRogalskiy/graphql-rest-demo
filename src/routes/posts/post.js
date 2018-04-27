import faker from 'faker';
import { database } from '../../database';
import { POST } from '../../schema';

export async function post(req, res) {
  try {
    const posts = database.getCollection('posts');
    let post = await POST.validate(req.body);

    post.id = faker.random.uuid();

    posts.insert(post);

    return res.json(post);
  } catch (e) {
    console.warn(e);
    return res.status(400).json({
      error: e
    });
  }
}
