import { Router } from 'express';

import { getAll } from './get-all';
import { get } from './get';
import { post } from './post';
import { update } from './update';
import { query } from './query';
import { deleteHandler } from './delete';

import comments from './comments';

export default function usersHandler() {
  const router = new Router();

  router
    .get('/', getAll)
    .get('/:id', get)
    .get('/search/:query', query)
    .put('/:id', update)
    .post('/', post)
    .delete('/:id', deleteHandler)
    .use('/:id/comments', comments());

  return router;
}
