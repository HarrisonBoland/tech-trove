import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Trove",
  description: "Cheapest and latest tech deals on the internet",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <header className="sticky top-0 p-6 bg-white border-b boreder-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl: md:text-4xl sm:p-8 flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="uppercase cursor-pointer hover:scale-110 duration-200">
              Tech Trove
            </h1>
          </Link>
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500"></i>
        </header>
        <div className="flex-1">{children}</div>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
