import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroOwnerAsset from "@/assets/hero-owner.png.asset.json";
import mainStreetAsset from "@/assets/main-street.png.asset.json";
import { PhotoHero, PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Wayfield — Real marketing help for small businesses",
      "Wayfield handles the marketing busywork so you can run your business. Start on your own, add our team whenever you want more hands on deck.",
    ),
  component: Index,
});

const PACKAGES = [
  {
    name: "Starter",
    body: "For businesses just getting their footing online. You set up your profile, connect your accounts, and Wayfield gets your organic presence moving. Simple reporting so you always know what's happening.",
  },
  {
    name: "Growth",
    body: "For businesses ready to be more active. Our team steps in and runs specific campaigns and workflows for you. You still have full access and visibility, we're just doing more of the heavy lifting.",
  },
  {
    name: "Complete",
    body: "For businesses who want it handled. This is a full, traditional partnership. Our team runs everything, you stay in the loop, and you get to focus entirely on your business.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <PhotoHero
        minHeight="min-h-[560px] md:min-h-[660px]"
        backgroundImage={heroOwnerAsset.url}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
            Real marketing help, without needing to become a tech person.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-photo/90 md:text-xl">
            Wayfield handles the busywork so you can run your business. Start on your own, add our
            team whenever you want more hands on deck.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PillLink to="/how-it-works" variant="cta" size="lg">
              See how it works
            </PillLink>
            <PillLink to="/packages" variant="outline-light" size="lg">
              Compare packages
            </PillLink>
          </div>
        </div>
      </PhotoHero>

      {/* Problem */}
      <Section tone="cream">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title="You didn't open your business to become a marketer." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="body-lg">
              You're already doing the real work: running the shop, taking care of customers,
              keeping the lights on. Marketing keeps getting pushed to the bottom of the list, or
              handed to whoever has ten spare minutes. Wayfield takes that off your plate. It starts
              simple, does the repetitive work for you, and grows into real hands-on help the moment
              you want it. No new software to learn. No marketing degree required.
            </p>
          </div>
        </div>
      </Section>

      {/* Packages overview */}
      <Section tone="bone">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Packages"
              title="Start where you are. Get more help when you need it."
              className="items-center"
            />
            <p className="body-lg mt-4">Every business starts somewhere different. Wayfield meets you there.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <article
                key={p.name}
                className="flex flex-col rounded-3xl bg-card p-8 shadow-card"
              >
                <span className="eyebrow">Step {i + 1}</span>
                <h3 className="mt-3 text-2xl">{p.name}</h3>
                <p className="mt-4 leading-relaxed text-brown">{p.body}</p>
                <Link
                  to="/packages"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                >
                  See what's included <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-brown">
            <Link to="/get-started" className="font-semibold text-blue underline-offset-4 hover:underline">
              Not sure which one fits? Talk to us and we'll help you figure it out.
            </Link>
          </p>
          <p className="mt-3 text-center text-sm text-brown">
            Curious what actually happens after you sign up?{" "}
            <Link to="/how-it-works" className="font-semibold text-indigo underline-offset-4 hover:underline">
              See how it works
            </Link>
          </p>
        </div>
      </Section>

      {/* Industry teaser */}
      <PhotoHero minHeight="min-h-[460px] md:min-h-[520px]" backgroundImage={mainStreetAsset.url}>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            We know local services, restaurants, and professional practices because that's who we
            work with.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-photo/90">
            Every industry has its own rhythm and its own customers. Wayfield's approach is built
            around the businesses that keep neighborhoods running, not generic templates built for
            anyone and everyone.
          </p>
          <Link
            to="/for-your-business"
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-on-photo underline-offset-4 hover:underline"
          >
            See what Wayfield can do for your industry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PhotoHero>

      {/* Why Wayfield teaser */}
      <Section tone="cream">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <PhotoPlaceholder aspect="aspect-[5/4]" />
          <div>
            <SectionHeading eyebrow="Why Wayfield" title="Built by people who've actually run agencies." />
            <p className="body-lg mt-6">
              Wayfield's founders spent years running their own agencies before building this. We
              know what it's like to be a small business owner getting pitched by marketing
              companies that overpromise and underdeliver. We built Wayfield to be the opposite of
              that: honest, plain-spoken, and genuinely on your side.
            </p>
            <Link
              to="/why-wayfield"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-blue underline-offset-4 hover:underline"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section tone="white">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading title="New to this? You're not alone." className="items-center" />
            <p className="body-lg mt-5">
              Most of the businesses we work with have never worked with a marketing company before,
              and plenty were nervous about it. Here's what people usually want to know before
              getting started.
            </p>
            <Link
              to="/faq"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue underline-offset-4 hover:underline"
            >
              Read the FAQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="bone">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading title="Let's find the right starting point for your business." />
            <p className="body-lg mt-5">
              No pressure, no jargon, just a conversation about where you are and where you want to
              go.
            </p>
            <PillLink to="/get-started" variant="cta" size="lg" className="mt-8">
              Get started
            </PillLink>
          </div>
          <PhotoPlaceholder aspect="aspect-[5/4]" className="order-1 lg:order-2" />
        </div>
      </Section>
    </>
  );
}
