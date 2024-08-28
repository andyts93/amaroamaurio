"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMail, LuInstagram } from "react-icons/lu";
import { TbBrandTiktok } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
        <div className="bg-[#fecb04] min-h-screen px-4 md:px-32 pt-6">
            <header className="mb-12">
                <nav className="bg-[#fff97b] px-12 py-8 rounded-full border border-black shadow-brutal-md flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-[#0a162a] uppercase">Amaurio</h1>
                    <ul className="hidden md:flex gap-6 font-light tracking-wider text-[#0a162a]">
                        <li><a href="#home" aria-label="Homepage">Home</a></li>
                        <li><a href="#storia" aria-label="La storia">La storia</a></li>
                        <li><a href="#ricetta" aria-label="La ricetta">La ricetta</a></li>
                        <li><a href="#acquista" aria-label="Acquista">Acquista</a></li>
                    </ul>
                    <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Apri menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </nav>
                <nav className={`md:hidden fixed top-0 right-0 h-full z-50 bg-amber-100 border-l border-black pl-6 py-6 flex flex-col transition-all duration-500 ${mobileMenuOpen ? '!translate-x-0' : ''}`} style={{ width: '400px', transform: 'translateX(400px)'}}>
                    <button className="rounded-full bg-white border border-black w-12 h-12 text-xl flex justify-center items-center shadow-brutal mb-4 place-self-end mr-24" onClick={() => setMobileMenuOpen(false)} aria-label="Chiudi menu">
                        <VscChromeClose />
                    </button>
                    <ul className="flex flex-col font-normal tracking-wider space-y-4 text-2xl">
                        <li><a href="#home" aria-label="Homepage">Home</a></li>
                        <li><a href="#storia" aria-label="La storia">La storia</a></li>
                        <li><a href="#ricetta" aria-label="La ricetta">La ricetta</a></li>
                        <li><a href="#acquista" aria-label="Acquista">Acquista</a></li>
                    </ul>
                </nav>
            </header>
            <main className="pb-12">{children}</main>
        </div>
        <footer className="border-t border-black bg-amber-100 px-4 md:px-32 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h2 className="text-4xl font-bold uppercase mb-4">Amaurio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold uppercase mb-4 font-outfit">Contatti</h3>
                    <p className="flex gap-2 items-center"><LuMail />hello@amaroamaurio.it</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold uppercase mb-4 font-outfit">Seguici</h3>
                    <div className="flex gap-4 text-6xl">
                        <Link href="#" className="hover:text-pink-500 transition-all duration-300 cursor-pointer" aria-label="Instagram"><LuInstagram /></Link>
                        <Link href="#" className="hover:text-pink-500 transition-all duration-300 cursor-pointer" aria-label="Tiktok"><TbBrandTiktok /></Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}
