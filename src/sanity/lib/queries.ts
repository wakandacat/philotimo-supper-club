// src/sanity/lib/queries.ts
import { defineQuery } from 'next-sanity'

//TAKE INTO ACCOUNT LOCALES

export const ABOUT_QUERY = defineQuery(`*[_type == "about"]| order(_updatedAt desc)[0] {
      _id,
      "bannerText": coalesce(
            bannerText[language == $locale][0].value,
            bannerText[language == "en"][0].value,
            "Missing translation value."
      ),
      "aboutText": coalesce(
            aboutText[language == $locale][0].value,
            aboutText[language == "en"][0].value,
            "Missing translation value."
      ),
      "historyText": coalesce(
            historyText[language == $locale][0].value,
            historyText[language == "en"][0].value,
            "Missing translation value."
      ),
      "hostText": coalesce(
            hostText[language == $locale][0].value,
            hostText[language == "en"][0].value,
            "Missing translation value."
      ),
      "inspoText": coalesce(
            inspoText[language == $locale][0].value,
            inspoText[language == "en"][0].value,
            "Missing translation value."
      ),
      hostImage-> {
            _id,
            file{
            ...,
            "alttext": coalesce(
                  alttext[language == $locale][0].value,
                  alttext[language == "en"][0].value,
                  "Missing translation value."
            ),
            "caption": coalesce(
                  caption[language == $locale][0].value,
                  caption[language == "en"][0].value,
                  "Missing translation value."
            )
      }
      }, 
      inspoImage-> {
            _id,
            file{
            ...,
            "alttext": coalesce(
                  alttext[language == $locale][0].value,
                  alttext[language == "en"][0].value,
                  "Missing translation value."
            ),
            "caption": coalesce(
                  caption[language == $locale][0].value,
                  caption[language == "en"][0].value,
                  "Missing translation value."
            )
      }
      }
}`);

export const EVENTS_QUERY = defineQuery(`*[_type == "event"] | order(datetime desc) {
      _id,
      "title": coalesce(
            title[language == $locale][0].value,
            title[language == "en"][0].value,
            "Missing translation value."
      ),
      "description": coalesce(
            description[language == $locale][0].value,
            description[language == "en"][0].value,
            "Missing translation value."
      ),
      cost,  
      media[]->{
            _id,
            file{
                  ...,
                  "alttext": coalesce(
                        alttext[language == $locale][0].value,
                        alttext[language == "en"][0].value,
                        "Missing translation value."
                  ),
                  "caption": coalesce(
                        caption[language == $locale][0].value,
                        caption[language == "en"][0].value,
                        "Missing translation value."
                  )
            }
      },
      datetime,
      location
}`);

//grab the homepage content --> just get the first one if there are multiple although there shouldn't be
// export const HOMEPAGE_QUERY = defineQuery(`*[_type == 'home' && language == $locale] [0]{_id, heroSubtitle, heroTitle, introText}`);
export const HOMEPAGE_QUERY = defineQuery(`*[_type == 'home'] | order(_updatedAt desc)[0]{
      _id, 
      "heroSubtitle": coalesce(
            heroSubtitle[language == $locale][0].value,
            heroSubtitle[language == "en"][0].value,
            "Missing translation value."
      ), 
      "heroTitle": coalesce(
            heroTitle[language == $locale][0].value,
            heroTitle[language == "en"][0].value,
            "Missing translation value."
      ), 
      "introText": coalesce(
            introText[language == $locale][0].value,
            introText[language == "en"][0].value,
            "Missing translation value."
     ), 
      heroImage-> {
            _id,
            file{
                  ...,
                  "alttext": coalesce(
                        alttext[language == $locale][0].value,
                        alttext[language == "en"][0].value,
                        "Missing translation value."
                  ),
                  "caption": coalesce(
                        caption[language == $locale][0].value,
                        caption[language == "en"][0].value,
                        "Missing translation value."
                  )
            }
      }
}`)

export const LEGAL_QUERY = defineQuery(`*[_type == 'legal']| order(_updatedAt desc)[0] {
      _id,
      "title": coalesce(
            title[language == $locale][0].value,
            title[language == "en"][0].value,
            "Missing translation value."
      ),
      "termsText": coalesce(
            termsText[language == $locale][0].value,
            termsText[language == "en"][0].value,
            "Missing translation value."
      )
}`);

export const BUSINESS_QUERY = defineQuery(`*[_type == 'businessInfo']| order(_updatedAt desc)[0] {
      _id,
      "name": coalesce(
            name[language == $locale][0].value,
            name[language == "en"][0].value,
            "Missing translation value."
      ),
      "description": coalesce(
            description[language == $locale][0].value,
            description[language == "en"][0].value,
            "Missing translation value."
      ),
      logo->{
            _id,
            file{
                  ...,
                  "alttext": coalesce(
                        alttext[language == $locale][0].value,
                        alttext[language == "en"][0].value,
                        "Missing translation value."
                  ),
                  "caption": coalesce(
                        caption[language == $locale][0].value,
                        caption[language == "en"][0].value,
                        "Missing translation value."
                  )
            }
      },
      location,
      phone,
      email,
      socials
}`);