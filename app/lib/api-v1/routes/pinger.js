'use strict';

module.exports = {
  method: 'GET',
  path: '/',
  options: {
    handler: () => ({ ping: 'pong' }),
  },
};
