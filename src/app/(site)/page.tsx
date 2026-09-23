import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY, HOMEPAGE_QUERY, EVENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  const { data: homepage } = await sanityFetch({ query: HOMEPAGE_QUERY });
  const { data: event } = await sanityFetch({ query: EVENTS_QUERY }); //maybe create a seperate one for this page
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="page-banner">
        <h1>{homepage?.heroTitle}</h1>
        <h3>{homepage?.heroSubtitle}</h3>
        <Link href="/contact" className="button-1-style">Pull up a chair</Link>
      </div>

    <div className="bg-(--philotimo-blue) text-(--philotimo-white) w-full">
      <h3>{homepage?.introText}</h3>
    </div>

    <div>
      <h2>Upcoming Event</h2>
      <div className="bg-(--philotimo-blue) text-(--philotimo-white)">      
        <h2>{event[0].name}</h2>
          <p>{event[0].datetime}</p>
          <p>{event[0].description}</p>
          <p>{event[0].cost}</p>
          <p>{event[0].location}</p>
          {event[0].media?.map((item) => (
          <div key={item._id}>
              <p>{item.file?.caption}</p>
              {item.file?.asset && (
              <img
                  src={urlFor(item.file).width(600).height(400).url()}
                  alt={item.file.alttext || item.file.caption || ''}
                  width={600}
                  height={400}
              />
              )}
          </div>
        ))}
        </div>
    <Link href="/contact" className="button-1-style">Pull up a chair</Link>
    <Link href="/events" className="button-1-style">See all events</Link>
    </div>

    <div className="bg-(--philotimo-blue) w-full text-(--philotimo-white)">
          <h2>Join our mailing list.</h2>
    </div>

    </div>
  );
}
