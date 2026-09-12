import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import legalPadAsset from "@/assets/legal-pad.png.asset.json";
import whiteboardPlanAsset from "@/assets/whiteboard-plan.png.asset.json";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/why-wayfield")({
  head: () => pageHead("Why Wayfield | Built by agency people", "Wayfield packages fifteen-plus years of agency experience into proven workflows that help small teams scale without adding overhead."),
  component: WhyWayfield,
});

const VALUES = [
  { title: "Proven, not theoretical", body: "Every workflow came from real client work." },
  { title: "Plain-spoken", body: "No jargon, no black boxes, you can see what every workflow does." },
  { title: "On your side", body: "Wayfield never competes with you for clients and never contacts your clients." },
];

function WhyWayfield() {
  return (
    <>
      <Section tone="cream" className="pb-12 md:pb-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading as="h1" eyebrow="Why Wayfield" title="Built by agency people, for agency people." />
          <PhotoPlaceholder aspect="aspect-[5/4]" image={legalPadAsset.url} alt="Agency founder documenting a proven client workflow" />
        </div>
      </Section>
      <Section tone="white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <PhotoPlaceholder aspect="aspect-[4/3]" image={whiteboardPlanAsset.url} alt="Agency team mapping campaign workflows on a whiteboard" />
          <div>
            <SectionHeading title="Built from real agency work." />
            <p className="body-lg mt-6">Wayfield was founded by three people who spent fifteen-plus years running media, social, and content agencies, working with everyone from growing companies to global brands. The workflows in Wayfield are the ones they built and rebuilt for their own teams. Small agencies deserve the same operating leverage the big ones have, without the cost of building it.</p>
          </div>
        </div>
      </Section>
      <Section tone="bone">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading title="Built around how agencies work." /></div>
          <ul className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
            {VALUES.map((value) => (
              <li key={value.title} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-secondary-foreground"><Check className="h-4 w-4" strokeWidth={3} /></span>
                <span><strong className="block text-lg text-indigo">{value.title}</strong><span className="mt-1 block text-brown">{value.body}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section tone="cream">
        <div className="container-site mx-auto max-w-2xl text-center">
          <SectionHeading title="More operating leverage, without more overhead." className="items-center" />
          <p className="body-lg mt-5">Run the workflows on one client account for 14 days. See how much repeatable work your team can hand off before you decide.</p>
          <PillLink to="/get-started" variant="cta" size="lg" className="mt-8">Start free trial</PillLink>
        </div>
      </Section>
    </>
  );
}