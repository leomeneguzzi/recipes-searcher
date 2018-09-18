import recipesGet from './controllers/recipeController';

const routes = (server) => {
  server.get('/recipes/', recipesGet);
};

export default routes;
