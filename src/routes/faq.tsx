import { createFileRoute, Link } from "@tanstack/react-router";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroCopy, Section } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("Agency campaign platform FAQ | Wayfield", "Answers about Wayfield workflows, supported channels, connected client accounts, packages, usage, and the 14-day free trial."),
  component: Faq,
});

const GROUPS = [
  { title: "For your agency", items: [
    { q: "Who is Wayfield for?", a: "Small marketing agencies, typically 2 to 15 people, that manage paid and organic campaigns for multiple clients and want to take on more without adding headcount." },
    { q: "Do my clients ever see Wayfield?", a: "No. Wayfield is the engine behind your agency's work. Reports, plans, and campaigns all carry your name." },
    { q: "Do you compete with agencies?", a: "No. Wayfield does not take on clients and never contacts yours." },
  ] },
  { title: "Accounts and channels", items: [
    { q: "Which channels are supported?", a: "Meta (Facebook and Instagram), TikTok, LinkedIn, Google Ads, and YouTube, at every tier." },
    { q: "What counts as a connected account?", a: "One client's set of connected ad and social profiles. A client with Meta, TikTok, and Google connected is one account." },
    { q: "How fast can we get a campaign live?", a: "From a completed brief to a live campaign in about thirty minutes." },
  ] },
  { title: "Packages and trial", items: [
    { q: "Are features limited on lower tiers?", a: "No. Every package includes every workflow and every channel. Tiers differ only by how many client accounts you can connect." },
    { q: "Is there a limit on team members?", a: "No. Add your whole team at any tier." },
    { q: "How does the free trial work?", a: "14 days, one client account, no credit card to start. Run every workflow and generate real reports before you decide." },
    { q: "Is there a contract?", a: "Month to month. Cancel any time." },
  ] },
  { title: "Usage", items: [
    { q: "What happens if I use more than my monthly allowance?", a: "Each package includes a generous AI processing allowance sized for its account limit. You will be alerted before you get close, and you can add more at any time." },
  ] },
];

function Faq() {
  return (
    <>
      <Section tone="cream" className="pb-10 md:pb-14">
        <div className="container-site">
          <HeroCopy eyebrow="FAQ" title="Questions agencies ask before getting started.">
            If you do not see your question here, <Link to="/get-started" className="font-semibold text-blue underline-offset-4 hover:underline">just ask us directly</Link>.
          </HeroCopy>
        </div>
      </Section>
      <Section tone="cream" className="pt-0 md:pt-0">
        <div className="container-site mx-auto flex max-w-3xl flex-col gap-12">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl md:text-3xl">{group.title}</h2>
              <Accordion type="multiple" className="mt-4 rounded-3xl bg-card px-6 shadow-card">
                {group.items.map((item, i) => <AccordionItem key={item.q} value={`${group.title}-${i}`} className="border-border last:border-b-0"><AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-indigo hover:no-underline md:text-lg">{item.q}</AccordionTrigger><AccordionContent className="pb-6 text-base leading-relaxed text-brown">{item.a}</AccordionContent></AccordionItem>)}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}