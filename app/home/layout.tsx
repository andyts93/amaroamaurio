import type { Metadata } from "next";

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
                    <h1 className="text-2xl font-bold text-black">Nome</h1>
                    <ul className="hidden md:flex gap-6 font-light tracking-wider">
                        <li>Home</li>
                        <li>La storia</li>
                        <li>La ricetta</li>
                        <li>Acquista</li>
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
            <div>
                <p>2024 &copy; All rights reserved</p>
            </div>
        </footer>
    </>
  );
}
