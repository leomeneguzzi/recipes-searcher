require('dotenv').config();

import server from './src/config/server';

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
