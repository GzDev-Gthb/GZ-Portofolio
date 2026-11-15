import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";


/* =================================
   FONT CONFIGURATION
================================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


/* =================================
   WEBSITE METADATA
================================= */


export const metadata: Metadata = {
  metadataBase: new URL("https://gz-portofolio.vercel.app"),

  title: "Ghazi — Information Systems Student",

  description:
    "The personal portfolio of Ghazi, an Information Systems student exploring technology, software development, and IT solutions.",

  openGraph: {
    title: "Ghazi — Information Systems Student",
    description:
      "Exploring technology, software development, and IT solutions.",
    url: "https://gz-portofolio.vercel.app",
    siteName: "Ghazi Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ghazi — Information Systems Student",
    description:
      "Exploring technology, software development, and IT solutions.",
    images: ["/opengraph-image"],
  },
};



/* =================================
   ROOT LAYOUT
================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}