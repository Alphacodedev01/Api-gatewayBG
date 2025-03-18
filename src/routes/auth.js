const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    prefix: '/api/auth',
    rewritePrefix: '/auth'
  });
};
