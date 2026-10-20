'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { SINGLETON_TYPES } from './src/sanity/singletons'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
     
    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'fr', title: 'Français' },
        { id: 'el', title: 'Ελληνικά' },
    ],
      defaultLanguages: ['en', 'fr', 'el'],
      languageDisplay: 'titleOnly',
      fieldTypes: ['string', 'text'],
    }),
  ],
  document: {
    //disallow creating new documents of singleton types, and disallow duplicate, delete, and unpublish actions for singleton types
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter((item) => !SINGLETON_TYPES.includes(item.templateId))
        : prev,
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.includes(schemaType)
        ? prev.filter(
            ({ action }) =>
              !['duplicate', 'delete', 'unpublish'].includes(action ?? '')
          )
        : prev,
  },
})
