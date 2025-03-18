const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
require('dotenv').config();

// Registrar CORS
fastify.register(cors, {
  origin: true
});

// Registrar rutas para cada microservicio
fastify.register(require('./routes/auth'));
fastify.register(require('./routes/users'));
fastify.register(require('./routes/business'));
fastify.register(require('./routes/geo'));
fastify.register(require('./routes/booking'));
fastify.register(require('./routes/notifications'));
fastify.register(require('./routes/payments'));

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    const host = '0.0.0.0';

    await fastify.listen({ 
      port: port, 
      host: host 
    });
    
    console.log(`Server is running on ${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
