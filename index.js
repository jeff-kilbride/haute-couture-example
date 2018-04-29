'use strict';

const Hapi = require('hapi');
const App = require('./app');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

const init = async () => {
  await server.register(App);
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
  console.log(
    `Server route table: ${JSON.stringify(
      server.methods.utils.getRoutes(server),
      null,
      2
    )}`
  );
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
