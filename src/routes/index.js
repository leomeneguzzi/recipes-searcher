import helloResponse from './controllers/helloController';

const routes = (server) => {
  server.get('/hello/:name', helloResponse);
};

export default routes;
