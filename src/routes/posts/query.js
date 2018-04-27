import { posts } from '../../database';

export function query(req, res) {
  const { query: reqQuery } = req.params;

  const allPosts = posts.where(obj => {
    const expr = new RegExp(reqQuery);

    return expr.test(obj.title) || expr.test(obj.body);
  });

  return res.json({
    posts: allPosts
  });
}