import { FastifyInstance } from 'fastify';

export async function configRoutes(app: FastifyInstance) {
    app.get('/ping', async () => {
        return 'pong\n';
    });
}