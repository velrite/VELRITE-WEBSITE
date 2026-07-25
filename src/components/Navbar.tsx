"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="border-b">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Velrite</Link>
        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-2 px-3 py-1.5 text-xs font-medium rounded-md border hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
