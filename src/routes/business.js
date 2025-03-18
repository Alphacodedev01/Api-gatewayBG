const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.BUSINESS_SERVICE_URL || 'http://localhost:3003',
    prefix: '/api/business',
    rewritePrefix: '/business'
  });
};
