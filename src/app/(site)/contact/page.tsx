import { sanityFetch } from "@/sanity/lib/live";
import { BUSINESS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function ContactPage() {
  const { data:business } = await sanityFetch({ query: BUSINESS_QUERY });

 function toBeImplemented() {
    alert("Registration has not yet been implemented.");
  }

  return (
    <>
    <div className="page-banner w-full py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h1>Join our next event!</h1>
      </div>
    </div>
    <div className="w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto page-section w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2>Register for our upcoming event.</h2>
        <h4>Either a registration form will be present here or a button link to a registration form through another application (LUMA).</h4>
        <div className="flex gap-8 mt-10">
            <Link href="" className="button-2-style">Register</Link>
            <Link href="/events" className="button-2-style">See upcoming event</Link>
        </div>
      </div>
    </div>
    <div className="w-full  page-section py-10 bg-(--philotimo-white) text-(--philotimo-blue)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2>Questions or Feedback?</h2>
        <h4>Let us know. We're happy to hear from you.</h4>
        <div className="flex gap-8 mt-10">
            <input type="text" id="message" name="message" placeholder="What a great evening!"></input>
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com"></input>
            <Link href="" className="button-2-style">Submit</Link>   
        </div>
      </div>
    </div>
    </>
  );
}