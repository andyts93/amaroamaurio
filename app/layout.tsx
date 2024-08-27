import type { Metadata } from "next";
import { Chicle, Jost, Outfit } from "next/font/google";
import "./globals.css";

const chicle = Chicle({ weight: '400', subsets: ['latin'], variable: '--font-chickle' });
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Amaro Amaurio",
  description: "Amaro Amaurio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chicle.variable} ${jost.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
