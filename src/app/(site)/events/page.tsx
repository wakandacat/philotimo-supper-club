import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function EventsPage() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <>
      <div className="page-banner w-full py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1>Events Page</h1>
        </div>
      </div>
        <div className="page-section w-full py-10 bg-(--philotimo-white) text-(--philotimo-blue)">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
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
      </div> 
      <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2>Join our mailing list.</h2>
        </div>
    </div>    
    </>
  );
}