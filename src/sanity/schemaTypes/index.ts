import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './event'
import { mediaType } from './media'
import { businessInfoType } from './businessinfo'
import { homeType } from './home'
import { aboutType } from './about'
import { legalType } from './legal'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, mediaType, businessInfoType, homeType, aboutType, legalType],
}
