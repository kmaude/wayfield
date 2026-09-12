import { createFileRoute } from "@tanstack/react-router";

import pacingTabletAsset from "@/assets/pacing-tablet.png.asset.json";
import planningOverheadAsset from "@/assets/planning-overhead.png.asset.json";
import reportingMeetingAsset from "@/assets/reporting-meeting.png.asset.json";
import officeWideAsset from "@/assets/office-wide.png.asset.json";
import activationLaptopAsset from "@/assets/activation-laptop.png.asset.json";
import { PhotoHero, PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillLink } from "@/components/Pill";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/workflows")({
  head: () => pageHead("Agency campaign workflows | Wayfield", "Explore Wayfield workflows for campaign planning, activation, pacing, optimization, and client-ready reporting across every major channel."),
  component: Workflows,
});

const WORKFLOWS = [
  {
    title: "Campaign planning",
    image: planningOverheadAsset.url,
    alt: "Agency strategist preparing a campaign plan for a client account",
    body: "Start with a short brief: what the client sells, who they want to reach, what success looks like, and the budget. Wayfield turns it into a plan your team can review and approve: audiences, channel mix, budget split, and flight dates. No blank page, no starting from scratch for every new account.",
  },
  {
    title: "Campaign activation",
    image: activationLaptopAsset.url,
    alt: "Campaign specialist preparing to activate a client campaign",
    body: "Once a plan is approved, push it live across Meta, TikTok, LinkedIn, Google and YouTube without rebuilding it in each platform. Campaign structure, targeting, and budgets are set up the way each channel expects them. From brief to live in about thirty minutes.",
  },
  {
    title: "Pacing and optimization",
    image: pacingTabletAsset.url,
    alt: "Agency team reviewing client campaign pacing and performance",
    body: "A campaign with a $30,000 monthly budget should spend about $1,000 a day. Wayfield checks pacing daily across every channel, flags campaigns that are behind or overspending, and recommends the adjustment. Your team stays ahead of problems instead of finding them at month end.",
  },
  {
    title: "Reporting",
    image: reportingMeetingAsset.url,
    alt: "Agency team preparing a client-ready campaign report",
    body: "Pull performance reports and cross-channel comparisons for any connected account in a few clicks. Executive summary, spend versus plan, key findings, audience and regional breakdowns, and recommendations for next steps. Ready to send, in your agency's name.",
  },
];

function Workflows() {
  return (
    <>
      <PhotoHero align="center" minHeight="min-h-[440px] md:min-h-[520px]" backgroundImage={officeWideAsset.url}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">The workflows.</h1>
          <p className="mt-6 text-lg leading-relaxed text-on-photo/90 md:text-xl">Everything in Wayfield is included at every tier. What follows is what each workflow does for your team.</p>
        </div>
      </PhotoHero>

      <Section tone="cream">
        <div className="container-site flex flex-col gap-20 md:gap-28">
          {WORKFLOWS.map((workflow, i) => (
            <div key={workflow.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <SectionHeading eyebrow={String(i + 1).padStart(2, "0")} title={workflow.title} />
                <p className="body-lg mt-6">{workflow.body}</p>
              </div>
              <PhotoPlaceholder image={workflow.image} alt={workflow.alt} className={cn("min-h-[420px]", i % 2 === 1 ? "lg:order-1" : undefined)} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="bone">
        <div className="container-site text-center">
          <SectionHeading eyebrow="Channels" title="Every major channel, at every tier." className="items-center" />
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 font-heading font-semibold text-indigo">
            <span>Meta (Facebook and Instagram)</span><span>TikTok</span><span>LinkedIn</span><span>Google Ads</span><span>YouTube</span>
          </div>
          <p className="body-lg mx-auto mt-6 max-w-3xl">Wayfield sits above the platforms and optimizes across all of them, so no single channel gets favored.</p>
          <PillLink to="/get-started" variant="cta" size="lg" className="mt-8">Start your 14-day free trial</PillLink>
        </div>
      </Section>
    </>
  );
}