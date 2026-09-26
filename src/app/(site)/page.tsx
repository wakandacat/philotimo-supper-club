import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY, HOMEPAGE_QUERY, EVENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  const { data: homepage } = await sanityFetch({ query: HOMEPAGE_QUERY });
  const { data: event } = await sanityFetch({ query: EVENTS_QUERY }); //maybe create a seperate one for this page
  return (
    <>
      <div className="page-banner w-full py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1>{homepage?.heroTitle}</h1>
          <h3>{homepage?.heroSubtitle}</h3>
          <Link href="/contact" className="button-1-style">Pull up a chair</Link>
        </div>
      </div>

    <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>{homepage?.introText}</h3>
      </div>
    </div>

    <div className="page-section w-full py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
      <h2>Upcoming Event</h2>
      <div className="event-container"> 
        <div className="flex flex-col">    
        <h2>{event[0].name}</h2>
        {/* check for null behaviours!! */}
            <h4>{event[0].datetime
      ? new Date(event[0].datetime).toLocaleString()
      : 'Date to be announced'}</h4>
            <h4>{event[0].description}</h4>
            <h4>{event[0].cost}</h4>
            <h4>{event[0].location}</h4>
          </div> 
          {event[0].media?.map((item) => (
          <div key={item._id}>
              <p>{item.file?.caption}</p>
              {item.file?.asset && (
              <img
                  src={urlFor(item.file).url()}
                  alt={item.file.alttext || item.file.caption || ''}
              />
              )}
          </div>
        ))}
        </div>
        <div className="flex gap-8">
            <Link href="/contact" className="button-2-style">Pull up a chair</Link>
            <Link href="/events" className="button-2-style">See all events</Link>
        </div>
      </div>

    </div>

    <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2>Join our mailing list.</h2>
      </div>
    </div>
  </>
  );
}
