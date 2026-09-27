import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY, EVENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function HomePage() {
  const { data: homepage } = await sanityFetch({ query: HOMEPAGE_QUERY });
  const { data: event } = await sanityFetch({ query: EVENTS_QUERY }); //maybe create a seperate one for this page
  return (
    <>
      <div className="w-full py-10">            
        <div className="mx-auto page-banner w-full max-w-7xl px-5 sm:px-6 lg:px-8">       
          <div className="flex flex-col justify-between w-full items-start gap-10">
            <h1>{homepage?.heroTitle}</h1>
            <h3>{homepage?.heroSubtitle}</h3>
            <Link href="/contact" className="button-1-style my-4">Pull up a chair</Link>
          </div>
          {homepage?.heroImage?.file && (
            <div className="hero-image-frame">
              <Image
                className="hero-image"
                src={urlFor(homepage.heroImage.file).url()}
                alt={homepage.heroImage.file.alttext || homepage.heroTitle || "Philotimo Supper Club"}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px"
              />
            </div>
          )}
        </div>
      </div>

    <div className="w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto page-section w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2>Welcome to Philotimo Supper Club</h2>
        <h4 className="text-center">{homepage?.introText}</h4>
        <Link href="/cabout" className="button-2-style mt-10">Learn More</Link>
      </div>
    </div>

    <div className="w-full py-10">
      <div className="mx-auto page-section w-full max-w-7xl px-5 sm:px-6 lg:px-8">
      <h2>Upcoming Event</h2>
      <div className="event-container"> 
        <div className="event-details flex flex-col justify-between items-start gap-8">    
        <h2>{event[0].title}</h2>
        {/* check for null behaviours!! */}
            <h4>{event[0].datetime
      ? 'When: ' + new Date(event[0].datetime).toLocaleString()
      : 'Date to be announced.'}</h4>
            <h4>{'Where:' + event[0].location}</h4>
            <h4>{event[0].description}</h4>
            <h4>{'Cost: $'+ event[0].cost + " CAD"}</h4>
          </div> 
          <div className="event-gallery">
               {event[0].media?.map((item) => (
              <div key={item._id} className="event-image">
                  {/* <p>{item.file?.caption}</p> */}
                  {item.file?.asset && (
                  <img
                      src={urlFor(item.file).url()}
                      alt={item.file.alttext || item.file.caption || ''}
                  />
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
            <Link href="/contact" className="button-1-style">Pull up a chair</Link>
            <Link href="/events" className="button-1-style">See all events</Link>
        </div>
      </div>

    </div>

    <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2>Join our mailing list.</h2>
           <h4>Get all the updates about upcoming events as soon as they’re released.</h4>
            <div className="flex gap-4 mt-10">
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com"></input>
            <Link href="" className="button-2-style">Submit</Link>   
          </div>
      </div>
    </div>
  </>
  );
}
