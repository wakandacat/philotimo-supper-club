import Link from "next/link";


export default function Footer(){

    return (
        <footer className="py-4 flex flex-col justify-center items-center bg-(--philotimo-blue-dark) text-(--philotimo-white)">
            <div className="flex justify-center flex-row gap-6">
                <h4>Philotimo Supper Club</h4>
                {/* links to social media with icons */}
                <Link href="">Instagram</Link>
                <Link href="">Spotify</Link>
                <Link href="">Facebook</Link>
            </div>
            <h5>© Philotimo Supper Club. All rights reserved.</h5>
        </footer>);
}