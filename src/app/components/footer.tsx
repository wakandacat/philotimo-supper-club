import { Link } from '@/i18n/navigation'
import { BUSINESS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import {
  FaXTwitter,
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from 'react-icons/fa6'
import { getLocale } from "next-intl/server";

export default async function Footer(){

const locale = await getLocale();

const { data: businessInfo } = await sanityFetch({
    query: BUSINESS_QUERY,
    params: { locale },
}) 

const PLATFORMS = [
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram },
  { key: 'facebook', label: 'Facebook', Icon: FaFacebook },
  { key: 'spotify', label: 'Spotify', Icon: FaSpotify },
  { key: 'tiktok', label: 'TikTok', Icon: FaTiktok },
  { key: 'twitter', label: 'Twitter', Icon: FaXTwitter },
  { key: 'youtube', label: 'YouTube', Icon: FaYoutube },
] as const


    return (
        <footer className="w-full bg-(--philotimo-blue-dark) py-4 text-(--philotimo-white)">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 sm:px-6 lg:px-8">
            <div className="flex flex-row flex-wrap justify-between gap-6">
                <div>
                     <h4>{businessInfo?.name}</h4>
                {businessInfo?.email && (
                    <a className="block" href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                )}
                {businessInfo?.phone && (
                    <a className="block" href={`tel:${businessInfo.phone.replace(/[^\d+]/g, '')}`}>
                    {businessInfo.phone}
                    </a>
                )}
                </div>
               
                <Link href="/legal">Terms & Conditions</Link>
                {/* links to social media with icons */}
                <div className="flex gap-6">
                    <nav aria-label="Social media" className="flex gap-6">
                        {PLATFORMS.filter(({ key }) => businessInfo?.socials?.[key]).map(
                            ({ key, label, Icon }) => (
                                <a
                                    key={key}
                                    href={businessInfo!.socials![key]!}
                                    aria-label={label}
                                    target="_blank" rel="noopener noreferrer"
                                    >
                                <Icon aria-hidden="true" className="size-6" />
                                </a>
                            )
                        )}
                    </nav>
                </div>
                
            </div>
            <h5 className="text-center">© {new Date().getFullYear()} {businessInfo?.name}. All rights reserved.</h5>
            </div>
        </footer>);
}