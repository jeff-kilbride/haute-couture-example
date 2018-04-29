'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Hello, world!',
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: (request) => `Hello, ${encodeURIComponent(request.params.name)}!`,
  },
];
