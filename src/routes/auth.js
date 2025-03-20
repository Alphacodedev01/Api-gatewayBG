const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: 'https://auth-service-bg.vercel.app',
    prefix: '/api/auth',
    rewritePrefix: '/auth',
    replyOptions: {
      rewriteRequestHeaders: (originalReq, headers) => {
        return {
          ...headers,
          'host': 'auth-service-bg.vercel.app'
        };
      }
    }
  });
};
