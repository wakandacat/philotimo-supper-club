// src/sanity/lib/queries.ts
import { defineQuery } from 'next-sanity'

//TAKE INTO ACCOUNT LOCALES

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0] {_id, bannerText, aboutText, historyText, hostText, inspoText, hostImage-> {_id,
      file}, inspoImage-> {_id,
      file}}`);

//grab all the events
// export const EVENTS_QUERY = defineQuery(`*[_type == "event" && language == $locale] | order(datetime desc) {_id, name, description, cost,  
//     media[]->{
//       _id,
//       file
//     }, datetime, location}`);
    export const EVENTS_QUERY = defineQuery(`*[_type == "event"] | order(datetime desc) {_id, title, description, cost,  
    media[]->{
      _id,
      file
    }, datetime, location}`);

//grab the homepage content --> just get the first one if there are multiple although there shouldn't be
// export const HOMEPAGE_QUERY = defineQuery(`*[_type == 'home' && language == $locale] [0]{_id, heroSubtitle, heroTitle, introText}`);
export const HOMEPAGE_QUERY = defineQuery(`*[_type == 'home'] [0]{_id, heroSubtitle, heroTitle, introText, heroImage-> {_id,
      file}}`)

export const LEGAL_QUERY = defineQuery(`*[_type == 'legal'][0] {_id, title, termsText}`);

export const BUSINESS_QUERY = defineQuery(`*[_type == 'busninessInfo'][0] {_id, name, description, logo[]->{
      _id,
      file },
      location, phone, email, socials[]->{
      _id,
      icon,
      url
    }}`);