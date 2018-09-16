import { createServer } from 'restify';
import routes from '../routes';

const server = createServer();

server.on('restifyError', (req, res, err, cb) => {
  console.log('deu ruim!');
  return cb();
});

routes(server);

export default server;
