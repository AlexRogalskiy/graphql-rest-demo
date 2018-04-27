import { posts } from '../../database';
import { POSTS } from '../../schema';

export async function put(req, res) {
  const user = await POSTS.validate(req.body);

  return res.json({
    id: '1234'
  });
}
