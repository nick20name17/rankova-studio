'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'teachersSection',
              S,
              context,
              title: 'Teachers Section'
            }),
            orderableDocumentListDeskItem({
              type: 'priceSection',
              S,
              context,
              title: 'Price Section'
            }),
            orderableDocumentListDeskItem({
              type: 'lessonsPage',
              S,
              context,
              title: 'Lessons Page'
            })
          ])
      }
    }),
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
