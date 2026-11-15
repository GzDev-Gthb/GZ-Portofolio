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
  title: "Ghazi — Information Systems Student",

  description:
    "The personal portfolio of Ghazi, an Information Systems student exploring technology, software development, and IT solutions.",
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