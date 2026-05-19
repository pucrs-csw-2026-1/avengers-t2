import fp from 'fastify-plugin'
import type { FastifyInstance } from 'fastify'
import { EventSchema, CreateEventSchema, UpdateEventSchema, EventListResponseSchema } from '../schemas/event.schema.js'
import { SectionSchema } from '../schemas/section.schema.js'
import { EventRoleSchema, CreateEventRoleSchema } from '../schemas/event-role.schema.js'
import { EventMetricsSchema, EventsMetricsSchema } from '../schemas/metrics.schema.js'

export default fp(async function schemasPlugin(fastify: FastifyInstance) {
  fastify.addSchema(EventSchema)
  fastify.addSchema(CreateEventSchema)
  fastify.addSchema(UpdateEventSchema)
  fastify.addSchema(EventListResponseSchema)
  fastify.addSchema(SectionSchema)
  fastify.addSchema(EventRoleSchema)
  fastify.addSchema(CreateEventRoleSchema)
  fastify.addSchema(EventMetricsSchema)
  fastify.addSchema(EventsMetricsSchema)
})
