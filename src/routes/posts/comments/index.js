import { Router } from 'express';

import { getAll } from './get-all';
import { get } from './get';

export default function comemntsHandler() {
  const router = new Router({ mergeParams: true });

  router
    .get('/', getAll)
    .get('/:commentId', get);

  return router;
}
