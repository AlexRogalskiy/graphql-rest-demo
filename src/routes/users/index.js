import { Router } from 'express';

import { getAll } from './get-all';
import { get } from './get';
import { put } from './put';
import { update } from './update';
import { query } from './query';
import { deleteHandler } from './delete';

export default function usersHandler() {
  const router = new Router();

  router
    .get('/', getAll)
    .get('/:id', get)
    .get('/search/:query', query)
    .put('/:id', put)
    .post('/', update)
    .delete('/:id', deleteHandler);

  return router;
}
