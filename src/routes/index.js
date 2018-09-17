import helloResponse from './controllers/helloController';
import recipesGet from './controllers/recipesController';

const routes = (server) => {
  server.get('/hello/:name', helloResponse);
  server.get('/recipes/', recipesGet);
};

export default routes;
