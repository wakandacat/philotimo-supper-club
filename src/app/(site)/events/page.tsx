import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function EventsPage() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>THIS IS THE EVENTS PAGE</h1>
        {events.map((event) => (
            <div key={event._id}>
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
      <a href="/">go home</a>
      banner component here <br/>
      join our mailing list/contact component <br/>
      footer
    </div>
  );
}