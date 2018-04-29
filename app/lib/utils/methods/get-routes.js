'use strict';

module.exports = {
  name: 'utils.getRoutes',
  method: getRoutes,
};

/**
 * getRoutes returns the server routing table info as an array
 *
 * @param {object} server
 * @returns {Array}
 */
function getRoutes(server) {
  return server.table().map((r) => ({ method: r.method, path: r.path }));
}
