import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'

export default fp(async function swaggerPlugin(fastify: FastifyInstance) {
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.1.0',
      info: {
        title: 'Events API',
        description: 'API REST para gerenciamento de eventos, seções e matrículas',
        version: '1.0.0',
      },
      tags: [
        { name: 'Events', description: 'CRUD de eventos' },
        { name: 'Sections', description: 'Seções de eventos' },
        { name: 'Roles', description: 'Roles de matrícula por evento' },
        { name: 'Metrics', description: 'Métricas de ocupação e seções' },
      ],
    },
  })

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: { docExpansion: 'list' },
  })
})
