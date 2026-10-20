import type { StructureResolver } from 'sanity/structure'
import { SINGLETONS } from './singletons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...SINGLETONS.map(({ type, title }) =>
        S.listItem()
          .title(title)
          .id(type)
          .child(S.document().schemaType(type).documentId(type))
      ),
      S.divider(),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('media').title('Media'),
    ])