import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import path from 'path';

export const swagger = [
  swaggerUi.serve,
  swaggerUi.setup(yaml.load(path.join(__dirname, '../../swagger.yaml')))
];
