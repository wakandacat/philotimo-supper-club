// src/sanity/lib/queries.ts
import { defineQuery } from 'next-sanity'

export const HOME_QUERY = defineQuery(`*[_type == "home"][0]`)