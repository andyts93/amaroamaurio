import type { Metadata } from "next";
import Link from "next/link";
import { LuMail, LuInstagram } from "react-icons/lu";
import { TbBrandTiktok } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Test",
  description: "Amaro Amaurio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="bg-[#fecb04] min-h-screen px-4 md:px-32 pt-6">
            <header className="mb-12">
                <nav className="bg-[#fff97b] px-12 py-8 rounded-full border border-black shadow-brutal-md flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-[#0a162a] uppercase">Amaurio</h1>
                    <ul className="hidden md:flex gap-6 font-light tracking-wider text-[#0a162a]">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#storia">La storia</a></li>
                        <li><a href="#ricetta">La ricetta</a></li>
                        <li><a href="#acquista">Acquista</a></li>
                    </ul>
                    <button type="button" className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
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
                        <Link href="#" className="hover:text-pink-500 transition-all duration-300 cursor-pointer"><LuInstagram /></Link>
                        <Link href="#" className="hover:text-pink-500 transition-all duration-300 cursor-pointer"><TbBrandTiktok /></Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}
