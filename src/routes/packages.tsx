import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  head: () =>
    pageHead(
      "Packages — Wayfield",
      "Three ways to work with Wayfield: Starter, Growth, and Complete. There's no wrong place to start, and you can move up whenever you're ready.",
    ),
  component: Packages,
});

const PACKAGES = [
  {
    name: "Starter",
    goodFor: "businesses just getting their footing online.",
    includes: [
      "We set up your business profile and connect your accounts",
      "Your organic presence (posts, monitoring, brand and competitor tracking) starts running",
      "Simple, easy-to-read reporting so you know what's happening",
      "You're in the driver's seat, we hand you the tools",
    ],
    featured: false,
  },
  {
    name: "Growth",
    goodFor: "businesses ready to be more active and see faster results.",
    includes: [
      "Everything in Starter",
      "Our team actively runs specific campaigns and workflows for you",
      "Paid social and targeted promotion added to the mix",
      "You keep full access and visibility the whole time",
      "Regular check-ins so nothing runs without your say-so",
    ],
    featured: true,
  },
  {
    name: "Complete",
    goodFor: "businesses who want it fully handled, like a traditional marketing partner.",
    includes: [
      "Everything in Growth",
      "Our team runs your marketing day to day, strategy included",
      "Dedicated account support",
      "You still have visibility into everything, you just don't have to run it",
      "The closest thing to having your own in-house marketing team, without hiring one",
    ],
    featured: false,
  },
];

function Packages() {
  return (
    <>
      <Section tone="cream" className="pb-10 md:pb-14">
        <div className="container-site mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h1"
            eyebrow="Packages"
            title="Three ways to work with us. Move up whenever you're ready."
            className="items-center"
          />
          <p className="body-lg mt-6">
            There's no wrong place to start. Most businesses begin with Starter and move up as they
            see what's working.
          </p>
        </div>
      </Section>

      <Section tone="cream" className="pt-0 md:pt-0">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={cn(
                "flex flex-col rounded-3xl bg-card p-8 shadow-card",
                p.featured && "ring-2 ring-blue",
              )}
            >
              {p.featured && <span className="eyebrow mb-3">Most popular</span>}
              <h2 className="text-3xl">{p.name}</h2>
              <p className="mt-3 text-brown">
                <span className="font-semibold text-indigo">Good for:</span> {p.goodFor}
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-brown">
                {p.includes.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm text-brown">
                  <span className="font-semibold text-indigo">Price:</span> Talk to us
                </p>
                <PillLink
                  to="/get-started"
                  variant={p.featured ? "cta" : "primary"}
                  className="mt-4 w-full"
                >
                  Get started with {p.name}
                </PillLink>
              </div>
            </article>
          ))}
        </div>
        <p className="container-site mt-10 text-center text-sm text-brown">
          Want to see what the first few weeks look like?{" "}
          <Link to="/how-it-works" className="font-semibold text-blue underline-offset-4 hover:underline">
            See how it works
          </Link>
        </p>
      </Section>

      <Section tone="bone">
        <div className="container-site mx-auto max-w-2xl text-center">
          <SectionHeading title="Ready for more? Just ask." className="items-center" />
          <p className="body-lg mt-5">
            There's no long-term lock-in and no pressure to upgrade before you're ready. When you
            want more support, tell us and we'll move you up. Simple as that.
          </p>
        </div>
      </Section>
    </>
  );
}
