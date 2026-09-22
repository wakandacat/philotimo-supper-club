// src/sanity/lib/queries.ts
import { defineQuery } from 'next-sanity'

export const HOME_QUERY = defineQuery(`*[_type == "home"][0]`)

export const EVENTS_QUERY = defineQuery(`*[_type == "event"]{_id, name, description, cost,  
    media[]->{
      _id,
      file
    }, datetime, location}`);

// export const HOMEPAGE_QUERY = defineQuery();