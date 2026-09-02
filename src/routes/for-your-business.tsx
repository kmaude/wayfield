import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import consultationAsset from "@/assets/consultation.png.asset.json";
import landscaperAsset from "@/assets/landscaper.png.asset.json";
import mainStreetAsset from "@/assets/main-street.png.asset.json";
import restaurantOwnerAsset from "@/assets/restaurant-owner.png.asset.json";
import { PhotoHero } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/for-your-business")({
  head: () =>
    pageHead(
      "For your business — Wayfield",
      "Marketing built around your industry, not a generic template. Wayfield works with local services, restaurants, and professional practices.",
    ),
  component: ForYourBusiness,
});

const INDUSTRIES = [
  {
    eyebrow: "Local services",
    title: "The phone should be ringing because people found you, not just because they already knew you.",
    body: "Referrals are great until they slow down. Local service businesses need a steady, visible presence so new customers can find you when they search, not just when someone happens to mention your name. Wayfield keeps your online presence active and your reputation visible, so the work keeps coming in.",
    focus: [
      "Local visibility and reviews",
      "Before-and-after style content that shows your work",
      "Staying top of mind between jobs",
    ],
    cta: "Talk to us about your business",
  },
  {
    eyebrow: "Restaurants",
    title: "Full tables start with people seeing you before they're hungry.",
    body: "Menus change, specials come and go, and there's never enough time in the day to post about all of it. Wayfield keeps your social presence active and your regulars (and soon-to-be regulars) in the loop, without you having to think about it every day.",
    focus: [
      "Consistent, appetizing content without the daily effort",
      "Promoting specials and events",
      "Building the kind of local buzz that fills tables",
    ],
    cta: "Talk to us about your restaurant",
  },
  {
    eyebrow: "Professional services",
    title: "Trust is the whole business. Your marketing should build it.",
    body: "Whether you're a law office, an accounting practice, or a consultancy, people choose you because they trust you. Wayfield helps you stay visible and credible in your community, so the right people find you before they ever need to ask around.",
    focus: [
      "Building a credible, professional presence",
      "Staying visible in your local market",
      "Content that builds trust before the first conversation",
    ],
    cta: "Talk to us about your practice",
  },
];

function ForYourBusiness() {
  return (
    <>
      <PhotoHero align="center" minHeight="min-h-[440px] md:min-h-[520px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Marketing built around your industry, not a generic template.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-on-photo/90 md:text-xl">
            We work with local services, restaurants, and professional practices. Here's what that
            looks like for each.
          </p>
        </div>
      </PhotoHero>

      {INDUSTRIES.map((ind, i) => (
        <div key={ind.eyebrow}>
          {i > 0 && <div className="h-3 bg-cream" />}
          <PhotoHero minHeight="min-h-[560px]">
            <div className="max-w-3xl">
              <span className="eyebrow text-on-photo/80">{ind.eyebrow}</span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                {ind.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-photo/90">{ind.body}</p>
              <ul className="mt-7 flex flex-col gap-2.5">
                {ind.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-medium">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-on-photo/15">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <PillLink to="/get-started" variant="cta" size="lg" className="mt-9">
                {ind.cta}
              </PillLink>
            </div>
          </PhotoHero>
        </div>
      ))}

      <Section tone="cream">
        <div className="container-site mx-auto max-w-2xl text-center">
          <p className="body-lg">
            These are where we've built the deepest experience, but we work with all kinds of small
            businesses. Reach out and tell us about yours.
          </p>
          <PillLink to="/get-started" variant="primary" size="lg" className="mt-8">
            Tell us about your business
          </PillLink>
        </div>
      </Section>
    </>
  );
}
