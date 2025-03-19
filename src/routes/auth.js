const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.AUTH_SERVICE_URL,
    prefix: '/api/auth',
    rewritePrefix: '/auth'
  });
};
