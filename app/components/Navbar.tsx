"use client";

import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
      >

        {/* LOGO */}

        <a
          href="#home"
          aria-label="Ghazi homepage"
          className="font-mono text-lg font-bold tracking-widest"
        >
          GZ<span className="text-accent">.</span>
        </a>


        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-9 md:flex">

          {navigation.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </a>

          ))}

        </div>


        {/* DESKTOP CTA */}

        <a
          href="#contact"
          
className="
  hidden sm:block rounded-full
  border border-border px-5 py-2.5
  text-sm
  transition-all duration-300 ease-out
  hover:-translate-y-0.5
  hover:border-accent
  hover:bg-accent/5
  hover:text-accent
  active:scale-[0.97]
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-accent
  motion-reduce:transition-none
"

        >
          Let&apos;s talk ↗
        </a>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border md:hidden"
        >

          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />

        </button>

      </nav>


      {/* MOBILE NAVIGATION */}

      <div
        id="mobile-menu"
        className={`border-t border-border px-5 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >

        <div className="mx-auto flex max-w-6xl flex-col py-4">

          {navigation.map((item) => (

            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-border py-4 text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>

          ))}

        </div>

      </div>

    </header>
  );
}