const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3007',
    prefix: '/api/payments',
    rewritePrefix: '/payments'
  });
};
