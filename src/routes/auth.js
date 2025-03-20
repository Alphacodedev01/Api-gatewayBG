const proxy = require('@fastify/http-proxy');

module.exports = async function (fastify, opts) {
  fastify.register(proxy, {
    upstream: 'https://auth-service-bg.vercel.app',
    prefix: '/api/auth',
    rewritePrefix: '/auth',
    http2: false,
    replyOptions: {
      rewriteRequestHeaders: (originalReq, headers) => {
        return {
          ...headers,
          'host': 'auth-service-bg.vercel.app',
          'x-forwarded-host': originalReq.headers.host
        };
      }
    }
  });

  // Ruta de prueba del proxy
  fastify.get('/api/auth/test-proxy', async (request, reply) => {
    return {
      status: 'ok',
      message: 'API Gateway auth routes working',
      timestamp: new Date().toISOString()
    };
  });
};
