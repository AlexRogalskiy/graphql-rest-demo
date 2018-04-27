import bodyParser from 'body-parser';

import { errorHandler } from './error-handler';

export default function middlewareHandler(app) {
  return app
    .use(bodyParser.json())
    .use(errorHandler);
}
