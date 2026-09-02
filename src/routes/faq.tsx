import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead(
      "FAQ — Wayfield",
      "Questions people ask before getting started with Wayfield: getting set up, how it works, plans and billing, and trust and data.",
    ),
  component: Faq,
});

const GROUPS = [
  {
    title: "Getting started",
    items: [
      {
        q: "Do I need to know anything about marketing to use this?",
        a: "No. Starter is built so you can get going without any background in marketing. If you'd rather not touch it at all, Growth and Complete mean our team runs things for you.",
      },
      {
        q: "What if I don't understand what's happening with my account?",
        a: "You can always ask us. Every report and update is written in plain language, not jargon, and a real person is available to walk you through anything that's unclear.",
      },
      {
        q: "How long does it take to get set up?",
        a: "Starter can be running within your first session. Growth and Complete usually start with a short conversation so we understand your business before anything launches.",
      },
    ],
  },
  {
    title: "How it works",
    items: [
      {
        q: "What's actually doing the work behind the scenes?",
        a: "Wayfield uses smart, automated tools to handle repetitive marketing tasks, built and overseen by people who've run marketing agencies for years. You're never left with a black box, if something needs a human judgment call, one of our team members is the one who makes it.",
      },
      {
        q: "Can I talk to a real person?",
        a: "Yes, anytime. Even on Starter, our team is reachable if you have questions.",
      },
      {
        q: "What's the difference between Wayfield and a typical marketing agency?",
        a: "A typical agency usually starts you at a high monthly cost whether or not you're ready for it. Wayfield lets you start small, see real results, and only add more support when you actually want it.",
      },
    ],
  },
  {
    title: "Plans and billing",
    items: [
      {
        q: "Can I switch packages later?",
        a: "Yes. Most businesses start with Starter and move up over time. Just let us know when you're ready.",
      },
      {
        q: "Can I downgrade or cancel?",
        a: "Yes. Reach out to your account contact and we'll walk you through it.",
      },
      {
        q: "Is there a contract?",
        a: "[Placeholder — pending final commercial terms: month-to-month vs. minimum term]",
      },
    ],
  },
  {
    title: "Trust and data",
    items: [
      {
        q: "Is my business information safe?",
        a: "Yes. Your data belongs to you and is never shared with other businesses or used for anyone else's benefit.",
      },
      {
        q: "Will I lose access to my accounts if I stop using Wayfield?",
        a: "No. Your business accounts and profiles are always yours.",
      },
    ],
  },
];

function Faq() {
  return (
    <>
      <Section tone="cream" className="pb-10 md:pb-14">
        <div className="container-site mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Questions people ask before getting started."
            className="items-center"
          />
          <p className="body-lg mt-6">
            If you don't see your question here,{" "}
            <Link to="/get-started" className="font-semibold text-blue underline-offset-4 hover:underline">
              just ask us directly
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section tone="cream" className="pt-0 md:pt-0">
        <div className="container-site mx-auto flex max-w-3xl flex-col gap-12">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl md:text-3xl">{group.title}</h2>
              <Accordion type="multiple" className="mt-4 rounded-3xl bg-card px-6 shadow-card">
                {group.items.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`${group.title}-${i}`}
                    className="border-border last:border-b-0"
                  >
                    <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-indigo hover:no-underline md:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-brown">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
