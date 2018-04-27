import { users as usersDb } from '../../database';

export function query(req, res) {
  const { query: reqQuery } = req.params;

  const users = usersDb.where(obj => {
    const expr = new RegExp(reqQuery);

    return expr.test(obj.name.first) || expr.test(obj.name.last);
  });

  return res.json({
    users
  });
}