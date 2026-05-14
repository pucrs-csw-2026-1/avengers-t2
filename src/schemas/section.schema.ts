import { Type, Static } from '@sinclair/typebox'

export const SectionSchema = Type.Object(
  {
    id_section: Type.String({ examples: ['sec_01hw'] }),
    title_section: Type.String(),
    description_section: Type.Optional(Type.String()),
    type: Type.String({ examples: ['palestra', 'workshop', 'mesa_redonda'] }),
    starts_at: Type.String({ format: 'date-time' }),
    ends_at: Type.String({ format: 'date-time' }),
    timezone: Type.String({ examples: ['America/Sao_Paulo'] }),
    registration_deadline_section: Type.Optional(Type.String({ format: 'date-time' })),
    thumbnail_url: Type.Optional(Type.String({ format: 'uri' })),
    capacity_section: Type.Optional(Type.Integer({ minimum: 1 })),
    workload_minutes: Type.Integer({
      minimum: 1,
      description: 'Carga horária em minutos — obrigatório para emissão de certificado',
    }),
    category_section: Type.Optional(Type.String()),
    language_section: Type.Optional(Type.String({ examples: ['pt-BR'] })),
    created_at: Type.String({ format: 'date-time' }),
    updated_at: Type.String({ format: 'date-time' }),
    deleted_at: Type.Union([Type.String({ format: 'date-time' }), Type.Null()]),
    deleted_by: Type.Union([Type.String(), Type.Null()]),
    created_by: Type.String(),
  },
  { $id: 'Section' },
)

export type Section = Static<typeof SectionSchema>
