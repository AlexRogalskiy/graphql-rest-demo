import bodyParser from 'body-parser';
import { swagger } from './swagger';

export default function middlewareHandler(app) {
  return app
    .use(bodyParser.json())
    .use('/', ...swagger);
}
