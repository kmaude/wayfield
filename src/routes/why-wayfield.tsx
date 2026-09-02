import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import legalPadAsset from "@/assets/legal-pad.png.asset.json";
import reviewingDocumentAsset from "@/assets/reviewing-document.png.asset.json";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/why-wayfield")({
  head: () =>
    pageHead(
      "Why Wayfield — Built by people who've run agencies",
      "Wayfield was built by agency founders who've been where you are. Straightforward, plain-spoken marketing help for small businesses.",
    ),
  component: WhyWayfield,
});

const DIFFERENCES = [
  "Plain language, no jargon, ever",
  "You always know what's happening and why",
  "You grow into more support at your own pace, never pressured into it",
  "A real person is always available when you need one",
];

function WhyWayfield() {
  return (
    <>
      <Section tone="cream" className="pb-12 md:pb-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading as="h1" eyebrow="Why Wayfield" title="We've been where you are." />
          <PhotoPlaceholder aspect="aspect-[5/4]" image={legalPadAsset.url} alt="Hands writing on a legal pad at a desk" />
        </div>
      </Section>

      <Section tone="white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <PhotoPlaceholder aspect="aspect-[4/3]" image={reviewingDocumentAsset.url} alt="Two people reviewing a printed document together" />
          <div>
            <SectionHeading title="Built by people who've actually run agencies." />
            <p className="body-lg mt-6">
              Before Wayfield, our founders ran their own marketing agencies for years. We know what
              it's like to sit across from a small business owner who's been burned before, promised
              the world by a marketing company and left with a bill and not much else to show for
              it. We built Wayfield because we believed there was a better way: start small, prove
              it works, and only grow the relationship when it actually makes sense for the business.
              Not the other way around.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title="Straightforward, not overwhelming." />
            <p className="body-lg mt-5">
              Every business we work with is busy running their business, not managing a marketing
              vendor. So we keep things simple:
            </p>
          </div>
          <ul className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
            {DIFFERENCES.map((d) => (
              <li key={d} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-secondary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-lg font-medium text-indigo">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="cream">
        <div className="container-site mx-auto max-w-2xl text-center">
          <SectionHeading title="Small businesses, real relationships." className="items-center" />
          <p className="body-lg mt-5">
            We focus on local services, restaurants, and professional practices, the kinds of
            businesses that make up a neighborhood. If that sounds like you, we'd like to meet you.
          </p>
          <PillLink to="/get-started" variant="cta" size="lg" className="mt-8">
            Talk to us
          </PillLink>
        </div>
      </Section>
    </>
  );
}
