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
              <div className="flex flex-col">
                <h2>{event.name}</h2>
                <h4>{event.datetime
            ? new Date(event.datetime).toLocaleString()
            : 'Date to be announced'}</h4>
                <h4>{event.description}</h4>
                <h4>{event.cost}</h4>
                <h4>{event.location}</h4>
              </div>
              <div>
                  {event.media?.map((item) => (
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
            
          </div>
        ))}
      </div> 
      <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
          <h2>Join our mailing list.</h2>
    </div>    
    </div>
  );
}