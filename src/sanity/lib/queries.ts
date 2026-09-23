// src/sanity/lib/queries.ts
import { defineQuery } from 'next-sanity'

//this was the default
export const HOME_QUERY = defineQuery(`*[_type == "home"][0]`)

//grab all the events
export const EVENTS_QUERY = defineQuery(`*[_type == "event"] | order(datetime desc) {_id, name, description, cost,  
    media[]->{
      _id,
      file
    }, datetime, location}`);

//grab the homepage content --> just get the first one if there are multiple although there shouldn't be
export const HOMEPAGE_QUERY = defineQuery(`*[_type == 'home'][0]{_id, heroSubtitle, heroTitle, introText}`);