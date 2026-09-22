import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>THIS IS THE ABOUT PAGE</h1>
      header <br/>
      <a href="/">go home</a>
      banner component here <br/>
      join our mailing list/contact component <br/>
      footer
    </div>
  );
}