import { Type, Static } from '@sinclair/typebox'

export const EventRoleSchema = Type.Object(
  {
    event_id: Type.String(),
    role: Type.String({ description: 'Role livre — ex: student, professor, staff' }),
  },
  { $id: 'EventRole' },
)

export const CreateEventRoleSchema = Type.Object(
  {
    role: Type.String(),
  },
  { $id: 'CreateEventRole' },
)

export type EventRole = Static<typeof EventRoleSchema>
export type CreateEventRole = Static<typeof CreateEventRoleSchema>
