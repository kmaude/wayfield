import { createFileRoute } from "@tanstack/react-router";

import phoneCallAsset from "@/assets/phone-call.png.asset.json";
import tabletCounterAsset from "@/assets/tablet-counter.png.asset.json";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead(
      "How it works — Wayfield",
      "Here's what actually happens when you work with Wayfield, from day one onward. No long onboarding, no jargon, more help whenever you want it.",
    ),
  component: HowItWorks,
});

const STEPS = [
  {
    title: "We start by learning your business.",
    image: tabletCounterAsset.url,
    body: "No long onboarding process, no forms that take an hour. We connect your accounts, learn who your business is and who your customers are, and get your online presence organized. Most of this happens in your first session.",
  },
  {
    title: "Your presence starts working, even if you never log back in.",
    image: undefined as string | undefined,
    body: "Once you're set up, Wayfield keeps things active in the background. You'll get simple updates so you always know what's happening, written in plain language, never buried in numbers you need a degree to understand.",
  },
  {
    title: "When you want more done for you, just say so.",
    image: phoneCallAsset.url,
    body: "Some businesses stay hands-on forever, and that's fine. Others reach a point where they'd rather have a real team running things. When that day comes, you tell us, and we move you into Growth or Complete. No pressure, no sales pitch, just a conversation about what you need next.",
  },
];

function HowItWorks() {
  return (
    <>
      <Section tone="cream" className="pb-12 md:pb-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="How it works"
              title="You don't have to figure this out alone, and you don't have to do it all at once."
            />
            <p className="body-lg mt-6">
              Here's what actually happens when you work with Wayfield, from day one onward.
            </p>
          </div>
          <PhotoPlaceholder aspect="aspect-[5/4]" />
        </div>
      </Section>

      <Section tone="white">
        <div className="container-site flex flex-col gap-20 md:gap-28">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo font-heading text-lg font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h2 className="mt-6 text-3xl md:text-4xl lg:leading-[1.15]">{step.title}</h2>
                <p className="body-lg mt-5">{step.body}</p>
              </div>
              <PhotoPlaceholder aspect="aspect-[4/3]" image={step.image} className={cn(i % 2 === 1 && "lg:order-1")} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="bone">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 shadow-card md:p-12">
            <SectionHeading title="Yes, there's smart technology behind this. No, you won't be left guessing." />
            <p className="body-lg mt-6">
              Wayfield uses automated tools to handle the repetitive parts of marketing, the kind of
              work that used to take hours of someone's day. But none of it runs unsupervised. Every
              workflow was built by people who've actually run marketing agencies, and a real person
              is always the one making the judgment calls that matter. You're never handed a black
              box and left to figure it out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink to="/packages" variant="primary" size="lg">
                See our packages
              </PillLink>
              <PillLink to="/get-started" variant="outline" size="lg">
                Talk to us
              </PillLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
