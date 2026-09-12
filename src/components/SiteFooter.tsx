import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/Logo";
import { PillLink } from "@/components/Pill";

const LINKS = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/workflows", label: "Workflows" },
  { to: "/packages", label: "Packages" },
  { to: "/why-wayfield", label: "Why wayfield" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bone">
      <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Link to="/" aria-label="Wayfield home">
            <Logo />
          </Link>
          <p className="text-sm text-brown">Agency workflows, done for you. Built by people who have run agencies.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-indigo/80">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-indigo">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <PillLink to="/get-started" variant="cta" size="sm">
                Start free trial
              </PillLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-site pb-8 text-xs text-slate">
        © {new Date().getFullYear()} Wayfield. All rights reserved.
      </div>
    </footer>
  );
}
