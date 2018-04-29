'use strict';

const HW = require('../lib/hello-world');

module.exports = {
  plugins: [HW],
  options: { routes: { prefix: '/hello' } },
};
