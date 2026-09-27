import { sanityFetch } from "@/sanity/lib/live";
import { LEGAL_QUERY } from "@/sanity/lib/queries";

export default async function LegalPage() {
  const { data: legal } = await sanityFetch({ query: LEGAL_QUERY });
  return (
    <>
      <div className="page-banner w-full py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1>{legal?.title}</h1>
        </div>
      </div>

    <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>{legal?.termsText}</h3>
      </div>
    </div>  
    </>
  );
}