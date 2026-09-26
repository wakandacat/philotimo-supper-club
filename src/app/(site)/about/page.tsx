import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  return (
    <>
      <div className="page-banner w-full py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1>philotimo definition</h1>
        </div>
      </div>

    <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>about the supper club history</h3>
      </div>
    </div>  
     <div className="page-section w-full py-10 bg-(--philotimo-white) text-(--philotimo-blue)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>how the supper club works</h3>
      </div>
    </div>
     <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>about Nikki</h3>
      </div>
    </div>
    <div className="page-section w-full py-10 bg-(--philotimo-white) text-(--philotimo-blue)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>about Nikki's mother</h3>
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