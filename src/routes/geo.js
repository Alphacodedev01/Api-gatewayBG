const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.GEO_SERVICE_URL || 'http://localhost:3004',
    prefix: '/api/geo',
    rewritePrefix: '/geo'
  });
};
