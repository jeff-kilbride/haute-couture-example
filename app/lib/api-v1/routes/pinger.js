'use strict';

module.exports = {
  method: 'get',
  path: '/',
  options: {
    handler: () => ({ ping: 'pong' }),
  },
};
