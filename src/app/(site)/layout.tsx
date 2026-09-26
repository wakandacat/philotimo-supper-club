// src/app/(site)/layout.tsx
import { SanityLive } from "@/sanity/lib/live";
import Header from "../components/header";
import Footer from "../components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
        {children}
      <Footer/>
      <SanityLive />
    </main>
  );
}
