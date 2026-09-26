"use client"

import Link from "next/link";
import { useState, useEffect } from 'react';


export default function Header(){

//change the header layout depending on screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false); //assume desktop first
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    
    setIsSmallScreen(media.matches);

    //listen for chnages in size
    const listener = (e: any) => setIsSmallScreen(e.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, []);

    return (
        <header className="w-full py-4 bg-(--philotimo-blue-dark) text-(--philotimo-white)">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            {isSmallScreen ? (
            <>
            {/* logo */}
            <div className="flex w-full justify-between items-center">
                <Link className="uppercase" href="/">Philotimo Supper Club</Link>
                <div>            
                    <Link className="header-link" href="/">Home</Link>
                    <Link className="header-link" href="/about">About</Link>
                    <Link className="header-link" href="/events">Events</Link>
                    <Link className="header-link" href="/contact">Contact</Link>
                </div>
                <p className="inline p-3 bg-(--philotimo-blue)"> TOGGLE SOON</p>
            </div>
          
            </>) 
             : (
            <div className="w-full">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                
                <button
                    type="button"
                    className="justify-self-start uppercase"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    >
                    {isMenuOpen ? "Close" : "Menu"}
                </button>

                <Link className="uppercase" href="/">
                    Philotimo Supper Club
                </Link>

                <p className="justify-self-end p-3 bg-(--philotimo-blue)">TOGGLE SOON</p>
              
            </div>

            <nav
                id="mobile-navigation"
                aria-label="Main navigation"
                hidden={!isMenuOpen}
                className="mt-4 border-t border-(--philotimo-white) pt-2"
            >
                <Link className="header-link block" href="/" onClick={() => setIsMenuOpen(false)}>
                Home
                </Link>
                <Link className="header-link block" href="/about" onClick={() => setIsMenuOpen(false)}>
                About
                </Link>
                <Link className="header-link block" href="/events" onClick={() => setIsMenuOpen(false)}>
                Events
                </Link>
                <Link className="header-link block" href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
                </Link>
            </nav>
            </div>
            )}
            </div>
        </header>);
}