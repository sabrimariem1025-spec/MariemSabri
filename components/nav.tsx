"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LogoWordmark } from "./logo";

const links = [
  { href: "/", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 dark:bg-ink/80 backdrop-blur-md border-b border-ink/10 dark:border-paper/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <Link href="/" aria-label="Mariem Sabri — home">
          <LogoWordmark />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? "text-gold dark:text-gold-light font-medium"
                    : "text-slate dark:text-paper/70 hover:text-gold dark:hover:text-gold-light"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center border border-ink/15 dark:border-paper/15 rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10">
          <div className="container-content flex flex-col py-4 gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`py-2.5 text-sm border-b border-ink/5 dark:border-paper/5 last:border-none ${
                    active ? "text-gold dark:text-gold-light font-medium" : ""
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
