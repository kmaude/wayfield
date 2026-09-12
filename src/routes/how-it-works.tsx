import { createFileRoute } from "@tanstack/react-router";

import cafeConversationAsset from "@/assets/cafe-conversation.png.asset.json";
import tabletCounterAsset from "@/assets/tablet-counter.png.asset.json";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () => pageHead("How Wayfield works | Agency campaigns", "Connect client accounts, plan campaigns, activate and optimize every channel, then generate client-ready reports with Wayfield."),
  component: HowItWorks,
});

const STEPS = [
  { title: "Connect your client's accounts", image: tabletCounterAsset.url, alt: "Agency team member connecting a client's campaign accounts", body: "Link the ad and social accounts for each client you manage: Meta, TikTok, LinkedIn, Google and YouTube. Every channel is included at every tier." },
  { title: "Plan the campaign", image: undefined as string | undefined, alt: undefined as string | undefined, body: "Answer a short set of questions about the client, the offer, the goal, and the budget. Wayfield produces a plan with audiences, channel mix, budget split, and flighting. Adjust anything before you approve it." },
  { title: "Activate and optimize", image: cafeConversationAsset.url, alt: "Agency team discussing campaign activation and optimization", body: "Push the approved plan live from one place. Wayfield checks pacing daily against budget and flight dates and tells you when a campaign is behind, ahead, or overspending, with a recommended fix." },
  { title: "Report to the client", image: undefined as string | undefined, alt: undefined as string | undefined, body: "Generate client-ready performance reports and cross-channel comparisons in a few clicks. Your branding, your voice, delivered on your schedule." },
];

function HowItWorks() {
  return (
    <>
      <Section tone="cream" className="pb-12 md:pb-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading as="h1" eyebrow="How it works" title="How Wayfield works." />
            <p className="body-lg mt-6">Four steps from a new client to a campaign you can report on.</p>
          </div>
          <PhotoPlaceholder aspect="aspect-[5/4]" />
        </div>
      </Section>
      <Section tone="white">
        <div className="container-site flex flex-col gap-20 md:gap-28">
          {STEPS.map((step, i) => (
            <div key={step.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo font-heading text-lg font-bold text-primary-foreground">{i + 1}</span>
                <h2 className="mt-6 text-3xl md:text-4xl lg:leading-[1.15]">{step.title}</h2>
                <p className="body-lg mt-5">{step.body}</p>
              </div>
              <PhotoPlaceholder aspect="aspect-[4/3]" image={step.image} alt={step.alt} className={cn(i % 2 === 1 && "lg:order-1")} />
            </div>
          ))}
        </div>
      </Section>
      <Section tone="bone">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 shadow-card md:p-12">
            <SectionHeading title="Run the full workflow on one client, free for 14 days." />
            <p className="body-lg mt-6">Connect the accounts, build the plan, launch the campaign, and generate the report before you decide. No credit card required to start.</p>
            <PillLink to="/get-started" variant="cta" size="lg" className="mt-8">Start your 14-day free trial</PillLink>
          </div>
        </div>
      </Section>
    </>
  );
}