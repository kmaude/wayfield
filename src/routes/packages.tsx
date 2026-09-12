import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  head: () => pageHead("Agency pricing and packages | Wayfield", "Simple account-based pricing for agencies. Every Wayfield package includes all four workflows and every supported campaign channel."),
  component: Packages,
});

const INCLUSIONS = [
  "All four workflows: plan, activate, optimize, report",
  "Meta, TikTok, LinkedIn, Google and YouTube",
  "Unlimited team members",
  "Client-ready reporting",
  "Email and chat support",
];

const PACKAGES = [
  { name: "Starter", price: "$1,895", accounts: "Up to 9 connected client accounts", goodFor: "For agencies proving it out on their first handful of clients.", featured: false, cta: "Start free trial" },
  { name: "Growth", price: "$2,795", accounts: "Up to 25 connected client accounts", goodFor: "For agencies scaling their book without scaling headcount.", featured: true, cta: "Start free trial" },
  { name: "Expansion", price: "Talk to us", accounts: "26 or more connected client accounts", goodFor: "For agencies running at volume or with custom needs.", featured: false, cta: "Talk to us" },
];

const QUESTIONS = [
  { q: "Can I move between packages?", a: "Yes, any time, prorated." },
  { q: "What counts as an account?", a: "One client's set of connected ad and social profiles." },
  { q: "Do my clients see Wayfield?", a: "No. Everything you deliver carries your agency's name." },
  { q: "Is there a contract?", a: "Month to month, cancel any time." },
];

function Packages() {
  return (
    <>
      <Section tone="cream" className="pb-10 md:pb-14">
        <div className="container-site mx-auto max-w-3xl text-center">
          <SectionHeading as="h1" eyebrow="Packages" title="Simple pricing, based on the accounts you connect." className="items-center" />
          <p className="body-lg mt-6">Every package includes every workflow and every channel. The only difference is how many client accounts you manage in Wayfield.</p>
        </div>
      </Section>
      <Section tone="cream" className="pt-0 md:pt-0">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article key={pkg.name} className={cn("flex flex-col rounded-3xl bg-card p-8 shadow-card", pkg.featured && "ring-2 ring-blue")}>
              {pkg.featured && <span className="eyebrow mb-3 text-coral">Most popular</span>}
              <h2 className="text-3xl">{pkg.name}</h2>
              <p className="mt-4 font-heading text-3xl font-bold text-indigo">{pkg.price}{pkg.price.startsWith("$") && <span className="ml-2 font-body text-sm font-medium text-brown">per month</span>}</p>
              <p className="mt-4 font-semibold text-indigo">{pkg.accounts}</p>
              <p className="mt-3 text-brown">{pkg.goodFor}</p>
              <ul className="mt-6 flex flex-col gap-3 text-brown">
                {INCLUSIONS.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} /><span>{item}</span></li>)}
              </ul>
              <div className="mt-auto border-t border-border pt-6">
                <PillLink to="/get-started" variant={pkg.featured ? "cta" : "primary"} className="w-full">{pkg.cta}</PillLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="bone">
        <div className="container-site mx-auto max-w-3xl text-center">
          <SectionHeading title="How the free trial works" className="items-center" />
          <p className="body-lg mt-5">Try Wayfield free for 14 days on one client account. Connect the account, run the workflows, generate the reports. No credit card required to start. When you are ready, pick a package and connect the rest of your clients.</p>
          <p className="mt-5 text-sm leading-relaxed text-slate"><strong>Fair use:</strong> Each package includes a generous monthly allowance of AI processing sized for its account limit. You will be alerted well before you reach it, and you can add more at any time.</p>
        </div>
        <div className="container-site mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {QUESTIONS.map((item) => <article key={item.q} className="rounded-3xl bg-card p-6 shadow-card"><h3 className="text-lg">{item.q}</h3><p className="mt-3 text-brown">{item.a}</p></article>)}
        </div>
      </Section>
    </>
  );
}