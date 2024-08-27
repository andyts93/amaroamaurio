import type { Metadata } from "next";
import { Chicle } from "next/font/google";
import "./globals.css";

const chicle = Chicle({ weight: '400', subsets: ['latin'] });

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
      <body className={chicle.className}>{children}</body>
    </html>
  );
}
