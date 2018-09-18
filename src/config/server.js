import { createServer, plugins } from 'restify';
import errorHandling from '../helpers/errorHandling';
import routes from '../routes';

const server = createServer();
server.use(plugins.queryParser());

errorHandling(server);
routes(server);

export default server;
