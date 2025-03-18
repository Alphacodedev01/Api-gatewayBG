const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: process.env.BOOKING_SERVICE_URL || 'http://localhost:3005',
    prefix: '/api/booking',
    rewritePrefix: '/booking'
  });
};
