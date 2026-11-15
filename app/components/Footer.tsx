"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="border-t border-border py-8">

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        <div>

          <p className="font-mono text-sm font-semibold tracking-widest">
            GZ<span className="text-accent">.</span>
          </p>

          <p className="mt-2 text-xs text-muted">
            Information Systems Student
          </p>

        </div>


        <p className="font-mono text-[10px] tracking-widest text-subtle">
          © {currentYear} GHAZI. ALL RIGHTS RESERVED.
        </p>

      </div>

    </footer>
  );
}