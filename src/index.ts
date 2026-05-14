import Fastify from 'fastify'
import swaggerPlugin from './plugins/swagger.plugin.js'
import { eventsRoutes } from './routes/events.routes.js'

const server = Fastify({ logger: true })

async function main() {
  await server.register(swaggerPlugin)
  await server.register(eventsRoutes)

  const address = await server.listen({ port: 3000, host: '0.0.0.0' })
  console.log(`Server running at ${address}`)
  console.log(`Swagger UI: ${address}/docs`)
}

main().catch((err) => {
  server.log.error(err)
  process.exit(1)
})
