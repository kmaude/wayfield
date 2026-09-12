import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/Logo";
import { PillLink } from "@/components/Pill";

const NAV = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/workflows", label: "Workflows" },
  { to: "/packages", label: "Packages" },
  { to: "/why-wayfield", label: "Why Wayfield" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-cream/90 backdrop-blur">
      <div className="container-site flex h-18 items-center justify-between">
        <Link to="/" aria-label="Wayfield home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.95rem] font-medium text-indigo/80 transition-colors hover:text-indigo"
              activeProps={{ className: "text-indigo font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
          <PillLink to="/get-started" variant="cta">
            Start free trial
          </PillLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-indigo md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-cream md:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-indigo hover:bg-bone"
                activeProps={{ className: "bg-bone font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
            <PillLink
              to="/get-started"
              variant="cta"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Start free trial
            </PillLink>
          </div>
        </nav>
      )}
    </header>
  );
}
