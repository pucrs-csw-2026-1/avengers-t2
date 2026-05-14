import { Type, Static } from '@sinclair/typebox'

const SectionBreakdownSchema = Type.Object({
  total: Type.Integer({ description: 'Total de seções no evento' }),
  by_type: Type.Record(Type.String(), Type.Integer(), {
    description: 'Contagem de seções agrupadas por tipo',
  }),
  total_workload_minutes: Type.Integer({
    description: 'Soma de workload_minutes de todas as seções',
  }),
})

export const EventMetricsSchema = Type.Object(
  {
    event_id: Type.String(),
    capacity: Type.Integer({ description: 'Capacidade total do evento' }),
    enrolled: Type.Integer({ description: 'Total de inscritos' }),
    available_spots: Type.Integer({ description: 'Vagas restantes' }),
    occupancy_percentage: Type.Number({
      minimum: 0,
      maximum: 100,
      description: 'Percentual de ocupação',
    }),
    sections: SectionBreakdownSchema,
  },
  { $id: 'EventMetrics' },
)

export type EventMetrics = Static<typeof EventMetricsSchema>
