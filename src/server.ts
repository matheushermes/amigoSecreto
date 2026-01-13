import Fastify from 'fastify';
import cors from '@fastify/cors';
import { configRoutes } from './router/router.js';

async function bootstrap() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true });
  await app.register(configRoutes);

  await app.listen({ port: 3000 });
  console.log('🚀 Servidor rodando na porta 3000');
}

bootstrap();