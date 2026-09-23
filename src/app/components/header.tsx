import Link from "next/link";


export default function Header(){

    return (
        <header className="py-4 bg-(--philotimo-blue-dark) text-(--philotimo-white)">
            {/* logo */}
            <Link className="header-link" href="/">Philotimo Supper Club</Link>
            <Link className="header-link" href="/about">About</Link>
            <Link className="header-link" href="/events">Events</Link>
            <Link className="header-link" href="/contact">Contact</Link>
            {/* language toggle dropdown */}
        </header>);
}