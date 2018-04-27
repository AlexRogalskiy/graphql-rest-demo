import bodyParser from 'body-parser';

export default function middlewareHandler(app) {
  return app
    .use(bodyParser.json());
}
