'use strict';

const API = require('../lib/api-v1');

module.exports = {
  plugins: [API],
  options: { routes: { prefix: '/v1' } },
};
