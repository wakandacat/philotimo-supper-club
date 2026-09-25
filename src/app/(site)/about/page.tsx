import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="page-banner">
        <h1>philotimo definition</h1>
      </div>

    <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
      <h3>about the supper club history</h3>
    </div>
     <div className="page-section bg-(--philotimo-white) text-(--philotimo-blue)">
      <h3>how the supper club works</h3>
    </div>
     <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
      <h3>about Nikki</h3>
    </div>
    <div className="page-section bg-(--philotimo-white) text-(--philotimo-blue)">
      <h3>about Nikki's mother</h3>
    </div>
     <div className="page-section bg-(--philotimo-blue) text-(--philotimo-white)">
        <h2>Join our mailing list.</h2>
    </div>
    </div>
  );
}