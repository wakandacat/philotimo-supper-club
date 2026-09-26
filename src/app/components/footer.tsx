import Link from "next/link";


export default function Footer(){

    return (
        <footer className="w-full bg-(--philotimo-blue-dark) py-4 text-(--philotimo-white)">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 sm:px-6 lg:px-8">
            <div className="flex flex-row flex-wrap justify-between gap-6">
                <h4>Philotimo Supper Club</h4>
                {/* links to social media with icons */}
                <div className="flex gap-6">
                    <Link href="">Instagram</Link>
                    <Link href="">Spotify</Link>
                    <Link href="">Facebook</Link>
                </div>
                
            </div>
            <h5 className="text-center">© Philotimo Supper Club. All rights reserved.</h5>
            </div>
        </footer>);
}