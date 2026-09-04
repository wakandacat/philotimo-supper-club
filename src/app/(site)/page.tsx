import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      HELLO
    </div>
  );
}
