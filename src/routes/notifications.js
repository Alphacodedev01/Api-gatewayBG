const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.NOTIFICATIONS_SERVICE_URL || 'http://localhost:3006',
    prefix: '/api/notifications',
    rewritePrefix: '/notifications'
  });
};
