import { createServer, plugins } from 'restify';
import errs from 'restify-errors';
import routes from '../routes';

const server = createServer();
server.use(plugins.queryParser());

server.on('restifyError', (req, res, err) => {
  console.log(err);
  if (err.response) {
    res.send(new errs.InternalServerError('Ocorreu um erro interno!'));
  } else if (err.request) {
    res.send(new errs.ServiceUnavailableError('Serviço indisponível!'));
  } else {
    res.send(new errs.NotImplementedError('Algo deu errado!'));
  }
});

routes(server);

export default server;
