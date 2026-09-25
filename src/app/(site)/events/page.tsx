import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function EventsPage() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="page-banner">
        <h1>Events Page</h1>
      </div>
        <div className="page-section bg-(--philotimo-white) text-(--philotimo-blue)">
        {events.map((event) => (
            <div className="event-container" key={event._id}>
              <h2>{event.name}</h2>
              <p>{event.datetime}</p>
              <p>{event.description}</p>
              <p>{event.cost}</p>
              <p>{event.location}</p>
              {event.media?.map((item) => (
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
        ))}
      </div> 
      <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
          <h2>Join our mailing list.</h2>
    </div>    
    </div>
  );
}