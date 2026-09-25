import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
       <div className="page-banner">
        <h1>Contact Page</h1>
      </div>
      <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
          <h2>Registration integration here</h2>
    </div>
    <div className="page-section bg-(--philotimo-white) text-(--philotimo-blue)">
          <h2>Feedback section</h2>
    </div>
      <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
          <h2>Join our mailing list.</h2>
    </div>
    </div>
  );
}