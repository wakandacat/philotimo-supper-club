import Link from "next/link";


export default function Header(){

    return (
        <header className="py-4 flex justify-between px-24 items-center bg-(--philotimo-blue-dark) text-(--philotimo-white)">
            {/* logo */}
            <Link className="uppercase" href="/">Philotimo Supper Club</Link>
            <div>            
                <Link className="header-link" href="/">Home</Link>
                <Link className="header-link" href="/about">About</Link>
                <Link className="header-link" href="/events">Events</Link>
                <Link className="header-link" href="/contact">Contact</Link>
                <p className="inline p-3 bg-(--philotimo-blue)"> TOGGLE SOON</p>
                {/* language toggle dropdown */}
            </div>
        </header>);
}