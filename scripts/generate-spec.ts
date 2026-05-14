import Fastify from 'fastify'
import swaggerPlugin from '../src/plugins/swagger.plugin.js'
import schemasPlugin from '../src/plugins/schemas.plugin.js'
import { eventsRoutes } from '../src/routes/events.routes.js'
import { writeFileSync, mkdirSync } from 'node:fs'

const server = Fastify()

await server.register(swaggerPlugin)
await server.register(schemasPlugin)
await server.register(eventsRoutes)
await server.ready()

const spec = server.swagger()

mkdirSync('docs', { recursive: true })
writeFileSync('docs/openapi.json', JSON.stringify(spec, null, 2))

console.log('docs/openapi.json gerado com sucesso')
await server.close()
