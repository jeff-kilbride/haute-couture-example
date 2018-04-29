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
  const table = server.table();
  const t = [];
  for (const r of table) {
    t.push({ method: r.method, path: r.path });
  }

  return t;
}
