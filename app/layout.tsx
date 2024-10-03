"use client";

import { Chicle, Jost, Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMail, LuInstagram, LuHome, LuChefHat, LuFootprints, LuShoppingBag, LuGamepad2 } from "react-icons/lu";
import { TbBrandTiktok } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from 'framer-motion';
import { getCookie, setCookie } from "cookies-next";
import Modal from "./components/modal";
import Image from "next/image";
import groovySmileFlower from "../public/images/groovy-smile-flower.svg";
import diagramma from "../public/images/diagramma.svg";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BiDrink } from "react-icons/bi";
import Script from 'next/script';
import useDetectAdblock from "./hooks/use-detect-adblocker";
import groovyStupidSmile from "../public/images/groovy-stupid-smile.svg";
import { Toaster } from "react-hot-toast";
import { GoPeople } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";

const chicle = Chicle({ weight: '400', subsets: ['latin'], variable: '--font-chickle' });
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const theSeasons = localFont(
  {
    src: [
      {
        path: '../public/fonts/theseasons.otf',
        weight: '400',
      }
    ],
    variable: '--font-theseasons',
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cookieBannerOpen, setCookieBannerOpen] = useState(false);
    const [fakeAccepted, setFakeAccepted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [beviModalOpen, setBeviModalOpen] = useState(false);
    const [adBlockerModalOpen, setAdBlockerModalOpen] = useState(false);
    const isAdBlocked = useDetectAdblock();
    const [maggiorenne, setMaggiorenne] = useState<boolean | null>(null);

    useEffect(() => {
        if (!getCookie('cookieBanner')) {
            setCookieBannerOpen(true);
        }
        if (!getCookie('newsletterModal')) {
            setModalOpen(true);
            setCookie('newsletterModal', 'seen', { maxAge: 60 * 60 * 24 * 7 });
        }
        setMaggiorenne(Boolean(getCookie('maggiorenne')));
    }, []);

    useEffect(() => {
        setAdBlockerModalOpen(isAdBlocked);
    }, [isAdBlocked]);

    const acceptCookies = (real: boolean = false) => {
        if (real) {
            setCookieBannerOpen(false);
            setCookie('cookieBanner', 'accepted', { maxAge: 60 * 60 * 24 * 365 });
        }
        else {
            setFakeAccepted(true);
        }
    };

    const sonoMaggiorenne = () => {
        setMaggiorenne(true);
        setCookie('maggiorenne', true, { maxAge: 60 * 60 * 24 * 365 });
    }
  return (
    <html lang="en">
      <head>
        <title>Amaro Amaurio</title>
      </head>
      <body className={`${chicle.variable} ${jost.variable} ${outfit.variable} ${theSeasons.variable}`}>
        <Providers>
            <Toaster position="top-center"/>
            {maggiorenne === null ? <></> : !maggiorenne ? (
          <div className="bg-gray-900 bg-opacity-90 backdrop-blur md:backdrop-blur-xl fixed top-0 w-full h-screen bottom-0 z-[100] flex items-center justify-center px-6">
            <div className="flex flex-col items-center gap-4">
                <Image src={'/images/logo-amaurio-alt.png'} width={942} height={943} alt="Logo Amaurio" className="w-64" />
                <h1 className="text-5xl md:text-6xl text-yellow-500">Che ce li hai 18 anni?</h1>
                <p className="text-sm text-white font-light text-center">(No serio, se li hai scrivici perché ci serve un maggiorenne che ci faccia da garante)</p>
                <div className="flex justify-between gap-4">
                    <a href="https://www.gazzettaufficiale.it/atto/regioni/caricaArticolo?art.progressivo=0&art.idArticolo=6&art.versione=1&art.codiceRedazionale=006R0302&art.dataPubblicazioneGazzetta=2006-06-24&art.idGruppo=0&art.idSottoArticolo=1#:~:text=E'%20vietata%20la%20somministrazione%20e,gli%20esercizi%20commerciali%20nonche'%20in" className="bg-red-500 px-4 py-1 rounded-full text-white disabled:opacity-50">Pass (<small>vuol dire no</small>)</a>
                    <button className="bg-green-500 px-4 py-1 rounded-full text-white" onClick={() => sonoMaggiorenne()}>Smash (<small>vuol dire si</small>)</button>
                </div>
            </div>
          </div>) : (<>
          <Modal open={modalOpen} onClose={setModalOpen}>
              <h3 className="text-3xl font-bold font-outfit bg-gradient-to-br from-yellow-500 to-pink-500 bg-clip-text text-transparent mb-4">Iscriviti alla nostra newsletter (?)</h3>
              <Image src={groovySmileFlower} alt="Groovy smile flower" className="w-32 mx-auto mb-4" />
              <p className="text-lg mb-4 text-justify">Non abbiamo un campaign manager, quindi non riceverete email <span className="italic font-light">(non salviamo nemmeno l&apos;indirizzo che inserite)</span> però <span className="underline">faffigo</span> avere il popup.</p>
              <div className="flex flex-col gap-4">
                  <input type="email" placeholder="Inserisci la tua email" className="border border-black rounded-full py-2 px-4 w-full shadow-brutal-sm" />
                  <label>
                      <input type="checkbox" className="mr-2" />
                      <span>Accetto di <span className="font-bold">non</span> ricevere email e di fare questa cosa inutile.</span>
                  </label>
                  <button className="bg-green-500 border border-black text-white px-4 py-2 rounded-full shadow-brutal-sm shadow-black uppercase" onClick={() => setModalOpen(false)}>Facciamolo!</button>
              </div>
          </Modal>
          <Modal open={beviModalOpen} onClose={setBeviModalOpen}>
              <h3 className="text-3xl font-bold font-outfit bg-gradient-to-br from-yellow-500 to-pink-500 bg-clip-text text-transparent mb-4 flex items-center">
                  Bevi responsabilmente
              </h3>
              <p className="text-justify mb-4">Noi di <span className="font-theseasons">Amaro Amaurio</span><sup>&reg;</sup> teniamo alla vostra salute, ecco delle semplici regole per gustarvi il nostro amaro.</p>
              <Image src={diagramma} alt="Diagramma Amaurio" className="mx-auto" />
              <p className="mt-4 italic">Scherziamo, leggi <Link className="text-pink-500 hover:text-pink-700" href={'/bevi-responsabilmente'} onClick={() => setBeviModalOpen(false)}>qui</Link></p>
          </Modal>
          <Modal open={adBlockerModalOpen} onClose={setAdBlockerModalOpen}>
            <h3 className="text-3xl font-bold font-outfit bg-gradient-to-br from-yellow-500 to-pink-500 bg-clip-text text-transparent mb-4 flex items-center">
                Ti credi furbo?
            </h3>
            <Image src={groovyStupidSmile} alt="Groovy stupid smile" className="w-32 mx-auto mb-4" />
            <p className="text-lg mb-4 text-justify">Blocchiamo le pubblicità qui? Abbiamo bisogno di sapere tutto su di te e sui tuoi desideri più profondi. <strong>Disabilita l&apos;AdBlocker</strong>, forza.</p>
            <p className="text-sm mb-4 text-justify">Se sei noioso lascia stare, non vogliamo sapere altro, cazzo vattene da qui.</p>
            <button className="bg-green-500 border border-black text-white px-4 py-2 rounded-full shadow-brutal-sm shadow-black uppercase w-full" onClick={() => setAdBlockerModalOpen(false)}>Non sono noioso</button>
          </Modal>
          <div className="bg-[#fecb04] min-h-screen px-4 md:px-32 pt-6">
              <header className="mb-12">
                  <nav className="bg-[#fff97b] px-12 py-8 rounded-full border border-black shadow-brutal-md flex justify-between items-center">
                      <h1 className="text-4xl font-bold text-[#0a162a] uppercase font-theseasons">Amaurio</h1>
                      <ul className="hidden md:flex gap-6 font-light tracking-wider text-[#0a162a] text-lg">
                          <li><a href="/#home" aria-label="Homepage" className="hover:text-red-600 hover:font-bold transition-all duration-500">Home</a></li>
                          <li><a href="/#storia" aria-label="La storia" className="hover:text-red-600 hover:font-bold transition-all duration-500">La storia</a></li>
                          <li><a href="/#ricetta" aria-label="La ricetta" className="hover:text-red-600 hover:font-bold transition-all duration-500">La ricetta</a></li>
                          <li><a href="/#acquista" aria-label="Acquista" className="hover:text-red-600 hover:font-bold transition-all duration-500">Acquista</a></li>
                          <li><a href="/#gioca" aria-label="Gioca" className="hover:text-red-600 hover:font-bold transition-all duration-500">Gioca</a></li>
                          <li><a href="/#testonials" aria-label="Testimonials" className="hover:text-red-600 hover:font-bold transition-all duration-500">Dicono di noi</a></li>
                          <li><a href="/#lamentele" aria-label="Lamentati" className="hover:text-red-600 hover:font-bold transition-all duration-500">Lamentati</a></li>
                          <li><Link href={'/bevi-responsabilmente'} aria-label="Bevi responsabilmente" className="hover:text-red-600 hover:font-bold transition-all duration-500">Bevi responsabilmente</Link></li>
                      </ul>
                      <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Apri menu">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                          </svg>
                      </button>
                  </nav>
                  <div className={`bg-black bg-opacity-30 backdrop-blur fixed top-0 left-0 w-full h-screen z-40 transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={() => setMobileMenuOpen(false)}></div>
                  <nav className={`md:hidden fixed top-0 right-0 h-full z-50 bg-amber-100 border-l border-black pl-6 py-6 flex flex-col transition-all duration-500 ${mobileMenuOpen ? '!translate-x-0' : ''}`} style={{ width: '350px', transform: 'translateX(350px)'}}>
                      <button className="rounded-full bg-white border border-black w-12 h-12 text-xl flex justify-center items-center shadow-brutal mb-4 place-self-end mr-4" onClick={() => setMobileMenuOpen(false)} aria-label="Chiudi menu">
                          <VscChromeClose />
                      </button>
                      <ul className="flex flex-col font-normal tracking-wider space-y-4 text-2xl">
                          <li className="flex items-center gap-2">
                              <LuHome />
                              <a href="/#home" aria-label="Homepage" onClick={() => setMobileMenuOpen(false)}>Home</a>
                          </li>
                          <li className="flex items-center gap-2">
                              <LuFootprints />
                              <a href="/#storia" aria-label="La storia" onClick={() => setMobileMenuOpen(false)}>La storia</a>
                          </li>
                          <li className="flex items-center gap-2">
                              <LuChefHat />
                              <a href="/#ricetta" aria-label="La ricetta" onClick={() => setMobileMenuOpen(false)}>La ricetta</a>
                          </li>
                          <li className="flex items-center gap-2">
                              <LuShoppingBag />
                              <a href="/#acquista" aria-label="Acquista" onClick={() => setMobileMenuOpen(false)}>Acquista</a>
                          </li>
                          <li className="flex items-center gap-2">
                              <LuGamepad2 />
                              <a href="/#gioca" aria-label="Gioca" onClick={() => setMobileMenuOpen(false)}>Gioca</a>
                          </li>
                          <li className="flex items-center gap-2">
                              <GoPeople />
                              <Link href="/#testimonials" aria-label="Testimonials" onClick={() => setMobileMenuOpen(false)}>Dicono di  noi</Link>
                          </li>
                          <li className="flex items-center gap-2">
                              <GrAnnounce />
                              <Link href="/#lamentele" aria-label="Lamentele" onClick={() => setMobileMenuOpen(false)}>Lamentati</Link>
                          </li>
                          <li className="flex items-center gap-2">
                              <BiDrink />
                              <Link href="/bevi-responsabilmente" aria-label="Bevi responsabilmente" onClick={() => setMobileMenuOpen(false)}>Bevi responsabilmente</Link>
                          </li>
                      </ul>
                  </nav>
              </header>
              <main className="pb-12">{children}</main>
          </div>
          {cookieBannerOpen && (<motion.div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0a162a] flex flex-col md:flex-row justify-center items-center gap-4 z-10" initial={{ y: '8rem', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}>
              {fakeAccepted ? 
                  <>
                      <p className="text-white text-xl text-center md:text-left">In realtà per salvare la vostra preferenza abbiamo dovuto usarli, ora dovete accettarli davvero.</p>
                      <button className="px-4 py-1 rounded-full bg-amber-500 font-semibold text-white shadow-brutal-sm shadow-white border border-white hover:shadow-none transition-all duration-150 text-lg" onClick={() => acceptCookies(true)}>Simpatici</button>
                  </> 
                  :
                  <>
                      <p className="text-white text-xl text-center md:text-left">Non usiamo cookies, ma vogliamo comunque rompervi i coglioni.</p>
                      <button className="px-4 py-1 rounded-full bg-amber-500 font-semibold text-white shadow-brutal-sm shadow-white border border-white hover:shadow-none transition-all duration-150 text-lg" onClick={() => acceptCookies(false)}>Ci siete riusciti</button>
                  </>
              }
              
          </motion.div>)}
          <div className="fixed bottom-0 right-0 transform translate-x-24 -translate-y-16 -rotate-45 bg-red-500 text-white py-2 px-24 border border-black shadow-brutal shadow-black text-xl cursor-pointer" onClick={() => setBeviModalOpen(true)}>
              Bevi responsabilmente
          </div>
          <footer className="border-t border-black bg-amber-100 px-4 md:px-32 py-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  <div>
                      <h2 className="text-4xl font-bold uppercase mb-4 font-theseasons">Amaurio</h2>
                      <p>Se c’è una cosa che Amaurio sa fare bene, è farsi notare. Ti aspetti che sia un amaro qualsiasi? <span className="underline">Svegliati</span>.</p>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold uppercase mb-4 font-outfit">Contatti</h3>
                      {/* <p className="flex gap-2 items-center"><LuMail />hello@amaroamaurio.it</p> */}
                      <p>Trovaci se ci riesci</p>
                      <p className="text-xs font-light">(o prova qui <a href="mailto:info@amaroamaurio.it">info@amaroamaurio.it</a>)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-4 font-outfit">Link inutili</h3>
                    <ul>
                        <li><Link href={'/privacy-policy'} className="hover:text-pink-500">Privacy policy</Link></li>
                    </ul>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold uppercase mb-4 font-outfit">Seguici</h3>
                      <p className="font-light text-sm mb-4">Seguiteci, mettete like, condividete! Otterrete qualcosa in cambio? No, però raga dai fatelo.</p>
                      <div className="flex gap-4 text-6xl">
                          <Link href="https://www.instagram.com/amaroamaurio/" className="hover:text-pink-500 transition-all duration-300 cursor-pointer" aria-label="Instagram" target="_blank" rel="nofollow"><LuInstagram /></Link>
                          <Link href="https://www.tiktok.com/@amaro.amaurio?_t=8q2rrg0V1N3&_r=1" className="hover:text-pink-500 transition-all duration-300 cursor-pointer" aria-label="Tiktok" target="_blank" rel="nofollow"><TbBrandTiktok /></Link>
                      </div>
                      <div className="mt-4">
                        <picture><source srcSet="https://simpleanalyticsbadges.com/amaroamaurio.it?mode=dark" media="(prefers-color-scheme: dark)" /><img src="https://simpleanalyticsbadges.com/amaroamaurio.it?background=rgb(254,203,4)&text=black" loading="lazy" referrerPolicy="no-referrer" crossOrigin="anonymous" alt="Website stats"/></picture>
                    </div>
                  </div>
              </div>
          </footer></>)}
      </Providers>
      <SpeedInsights />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}
