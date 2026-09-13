import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import trialVideoCallAsset from "@/assets/trial-video-call.png.asset.json";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillButton } from "@/components/Pill";
import { HeroCopy, Section } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/get-started")({
  head: () => pageHead("Start your free trial | Wayfield", "Start a 14-day Wayfield trial with one client account. Run every agency workflow and generate real reports with no credit card required."),
  component: GetStarted,
});

const fieldClass = "w-full rounded-2xl border border-input bg-card px-4 py-3 text-base text-indigo placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30";
const labelClass = "block text-sm font-semibold text-indigo";

function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }

  return (
    <>
      <Section tone="cream" className="pb-12 md:pb-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <HeroCopy eyebrow="Get started" title="Start your 14-day free trial.">
              Tell us a little about your agency and we will get you set up with one client account. No credit card required.
            </HeroCopy>
          </div>
          <PhotoPlaceholder aspect="aspect-[5/4]" image={trialVideoCallAsset.url} alt="Agency owner on a video call with the Wayfield team" />
        </div>
      </Section>
      <Section tone="bone">
        <div className="container-site mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-3xl bg-card p-8 text-center shadow-card md:p-12" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-blue" strokeWidth={1.75} />
              <h2 className="mt-5 text-3xl">Thanks, we have got it.</h2>
              <p className="body-lg mt-4">Someone from Wayfield will be in touch soon to set up your agency with one client account. In the meantime, feel free to look through our <Link to="/faq" className="font-semibold text-blue underline-offset-4 hover:underline">FAQ</Link>.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-3xl bg-card p-8 shadow-card md:p-10">
              <div className="flex flex-col gap-2"><label htmlFor="name" className={labelClass}>Your name</label><input id="name" name="name" type="text" required maxLength={100} className={fieldClass} placeholder="e.g. Jordan Smith" /></div>
              <div className="flex flex-col gap-2"><label htmlFor="agency" className={labelClass}>Agency name</label><input id="agency" name="agency" type="text" required maxLength={100} className={fieldClass} placeholder="e.g. North Street Media" /></div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="email" className={labelClass}>Work email</label><input id="email" name="email" type="email" required maxLength={255} className={fieldClass} placeholder="you@agency.com" /></div>
                <div className="flex flex-col gap-2"><label htmlFor="website" className={labelClass}>Website</label><input id="website" name="website" type="url" required maxLength={255} className={fieldClass} placeholder="https://agency.com" /></div>
              </div>
              <div className="flex flex-col gap-2"><label htmlFor="clients" className={labelClass}>Number of clients you currently manage</label><select id="clients" name="clients" required defaultValue="" className={fieldClass}><option value="" disabled>Choose one</option><option>1 to 5</option><option>6 to 9</option><option>10 to 25</option><option>26 or more</option></select></div>
              <div className="flex flex-col gap-2"><label htmlFor="package" className={labelClass}>Which package are you interested in?</label><select id="package" name="package" required defaultValue="" className={fieldClass}><option value="" disabled>Choose one</option><option>Starter</option><option>Growth</option><option>Expansion</option><option>Not sure yet</option></select></div>
              <div className="flex flex-col gap-2"><label htmlFor="notes" className={labelClass}>Anything we should know <span className="font-normal text-slate">(optional)</span></label><textarea id="notes" name="notes" rows={4} maxLength={1000} className={fieldClass} placeholder="Tell us about your agency or the client account you want to try." /></div>
              <PillButton type="submit" variant="cta" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">Start free trial</PillButton>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}