import express from 'express';

import middleware from './middleware';
import routes from './routes';

const app = express();

middleware(app);
routes(app);

app.listen(9000, () => {
  console.log(`REST endpoint listening on port 9000`);
});
