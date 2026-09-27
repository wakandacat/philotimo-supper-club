import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function AboutPage() {
  const { data: about } = await sanityFetch({ query: ABOUT_QUERY });
  return (
    <>
      <div className="page-banner w-full py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1>{about?.bannerText}</h1>
        </div>
      </div>

    <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>{about?.aboutText}</h3>
      </div>
    </div>  
     <div className="page-section w-full py-10 bg-(--philotimo-white) text-(--philotimo-blue)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h3>{about?.historyText}</h3>
      </div>
    </div>
     <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <h3>{about?.hostText}</h3>
        <div className="event-image" >
          {about?.hostImage?.file && (
            <img src={urlFor(about.hostImage.file).url()}/>          
          )} 
        </div>
      </div>
    </div>
    <div className="page-section w-full py-10 bg-(--philotimo-white) text-(--philotimo-blue)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <h3>{about?.inspoText}</h3>
        <div className="event-image" >
          {about?.inspoImage?.file && (
            <img src={urlFor(about.inspoImage.file).url()}/>          
          )} 
        </div>
      </div>
    </div>
     <div className="page-section w-full py-10 bg-(--philotimo-blue) text-(--philotimo-white)">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2>Join our mailing list.</h2>
        <h4>Get all the updates about upcoming events as soon as they’re released.</h4>
        <div className="flex gap-4 mt-10">
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com"></input>
            <Link href="" className="button-2-style">Submit</Link>   
        </div>
      </div>
    </div>
    </>
  );
}