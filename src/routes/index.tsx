import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";

import heroAgencyTeamAsset from "@/assets/hero-agency-team.png.asset.json";
import officeWideAsset from "@/assets/office-wide.png.asset.json";
import endOfDayAsset from "@/assets/end-of-day.png.asset.json";
import whiteboardPlanAsset from "@/assets/whiteboard-plan.png.asset.json";
import { PhotoHero, PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Wayfield | Campaign workflows for agencies",
      "Plan, launch, optimize, and report on more client campaigns without adding headcount. Wayfield gives small agencies proven workflows for every channel.",
    ),
  component: Index,
});

const PROOF = [
  {
    title: "Built by agency people",
    body: "Fifteen-plus years of running campaigns, packaged into repeatable workflows.",
  },
  {
    title: "Every channel, every plan",
    body: "Meta, TikTok, LinkedIn, Google and YouTube included at every tier.",
  },
  {
    title: "Better results, not just faster ones",
    body: "Workflows that validate the numbers before you put your name on them.",
  },
  {
    title: "A fraction of the cost of building it yourself",
    body: "Two to five times cheaper than stitching frontier AI tools together on your own.",
  },
];

const WORKFLOWS = [
  {
    name: "Plan",
    body: "Answer a short set of questions about the client, the offer, and the goal. Wayfield turns it into a campaign plan with audiences, budget split, and flighting.",
  },
  {
    name: "Activate",
    body: "Push the plan live across Meta, TikTok, LinkedIn, Google and YouTube from one place. From first question to live campaign in about half an hour.",
  },
  {
    name: "Optimize",
    body: "Daily pacing checks against budget and flight dates, with clear recommendations when a campaign falls behind or overspends.",
  },
  {
    name: "Report",
    body: "Client-ready performance reports and cross-channel comparisons in a few clicks. Weekly, monthly, or end of campaign.",
  },
];

function Index() {
  return (
    <>
      <PhotoHero minHeight="min-h-[560px] md:min-h-[660px]" backgroundImage={heroAgencyTeamAsset.url}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
            Run more client campaigns without hiring more people.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-photo/90 md:text-xl">
            Wayfield gives small marketing agencies the planning, activation, optimization, and reporting workflows that big agencies run on. Connect your clients&apos; accounts, follow the workflow, deliver the work. Built by people who have run agencies.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PillLink to="/get-started" variant="cta" size="lg">Start your 14-day free trial</PillLink>
            <PillLink to="/workflows" variant="outline-light" size="lg">See the workflows</PillLink>
          </div>
        </div>
      </PhotoHero>

      <section className="bg-bone py-8">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((item) => (
            <div key={item.title}>
              <p className="font-heading font-semibold text-indigo">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-brown">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section tone="cream">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title="You did not start an agency to spend your nights building reports." />
          </div>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7">
            <p className="body-lg">Small agencies live in the gap between what clients expect and what a small team can deliver. Every new account means another planning doc, another set of dashboards, another Friday spent pulling numbers into a deck. Growth means hiring, and hiring eats the margin that growth was supposed to create.</p>
            <p className="body-lg">Wayfield closes that gap. Connect a client&apos;s accounts, and the workflows your team would otherwise build from scratch are already there: campaign planning, activation, pacing and optimization, and client-ready reporting. Your people spend their time on strategy and relationships. Wayfield handles the repeatable work.</p>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="Workflows" title="Four workflows. Every channel. Every client." className="items-center" />
            <p className="body-lg mt-4">The same sequence a seasoned media team runs, ready the moment you connect an account.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WORKFLOWS.map((workflow, i) => (
              <article key={workflow.name} className="flex flex-col rounded-3xl bg-card p-8 shadow-card">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl">{workflow.name}</h3>
                <p className="mt-4 leading-relaxed text-brown">{workflow.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/workflows" className="inline-flex items-center gap-2 font-semibold text-blue underline-offset-4 hover:underline">See what each workflow includes <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <PhotoHero minHeight="min-h-[460px] md:min-h-[520px]" backgroundImage={officeWideAsset.url}>
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">Priced by accounts, not by features.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-photo/90">Every tier includes every workflow and every channel. You pay for the number of client accounts you connect, so the only thing that changes as you grow is the number you manage.</p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 font-semibold">
            <span>Starter, up to 9 accounts, $1,895 per month</span>
            <span>Growth, up to 25 accounts, $2,795 per month</span>
            <span>Expansion, 26 and up, talk to us</span>
          </div>
          <Link to="/packages" className="mt-8 inline-flex items-center gap-2 font-semibold text-on-photo underline-offset-4 hover:underline">Compare packages <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </PhotoHero>

      <Section tone="cream">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <PhotoPlaceholder aspect="aspect-[5/4]" image={whiteboardPlanAsset.url} alt="Agency team member mapping a campaign workflow on a whiteboard" />
          <div>
            <SectionHeading eyebrow="Why Wayfield" title="Built by people who have actually run agencies." />
            <p className="body-lg mt-6">Wayfield&apos;s founders spent fifteen-plus years running media and social agencies before building this. Every workflow in the platform came out of real client work, not a product roadmap. We know what it costs to scale an agency the old way, and we built Wayfield so you do not have to.</p>
            <Link to="/why-wayfield" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue underline-offset-4 hover:underline">More about us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-site mx-auto max-w-4xl text-center">
          <SectionHeading title="See a campaign go from brief to live in thirty minutes." className="items-center" />
          <p className="body-lg mt-5">A short walkthrough of the workflows, start to finish.</p>
          <div className="mt-8 flex aspect-video items-center justify-center rounded-3xl border border-border bg-bone">
            <div className="text-center text-indigo">
              <Play className="mx-auto h-12 w-12" strokeWidth={1.5} />
              <p className="mt-3 font-semibold">Explainer video coming soon.</p>
            </div>
          </div>
          <Link to="/faq" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue underline-offset-4 hover:underline">Read the FAQ <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Section>

      <Section tone="bone">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading title="Try it on one client for 14 days, free." />
            <p className="body-lg mt-5">Connect one account, run the workflows, and see the reports before you decide. No credit card to start.</p>
            <PillLink to="/get-started" variant="cta" size="lg" className="mt-8">Start free trial</PillLink>
          </div>
          <PhotoPlaceholder aspect="aspect-[5/4]" className="order-1 lg:order-2" image={endOfDayAsset.url} alt="Agency owner closing a laptop at the end of the day" />
        </div>
      </Section>
    </>
  );
}