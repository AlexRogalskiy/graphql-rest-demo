import { Router } from 'express';

import { getAll } from './get-all';
import { get } from './get';
import { post } from './post';

export default function usersHandler() {
  const router = new Router();

  router
    .get('/', getAll)
    .post('/', post)
    .get('/:id', get);

  return router;
}
