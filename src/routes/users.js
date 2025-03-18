const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.USER_SERVICE_URL || 'http://localhost:3002',
    prefix: '/api/users',
    rewritePrefix: '/users'
  });
};
