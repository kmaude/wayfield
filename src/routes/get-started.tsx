import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PillButton } from "@/components/Pill";
import { Section, SectionHeading } from "@/components/Section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/get-started")({
  head: () =>
    pageHead(
      "Get started — Wayfield",
      "Answer a few quick questions and we'll get back to you with next steps. No obligation, no pressure, no sales script.",
    ),
  component: GetStarted,
});

const fieldClass =
  "w-full rounded-2xl border border-input bg-card px-4 py-3 text-base text-indigo placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30";
const labelClass = "block text-sm font-semibold text-indigo";

function GetStarted() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Section tone="cream" className="pb-12 md:pb-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Get started"
              title="Let's find the right starting point for your business."
            />
            <p className="body-lg mt-6">
              Answer a few quick questions and we'll get back to you with next steps. No obligation,
              no pressure, no sales script.
            </p>
          </div>
          <PhotoPlaceholder aspect="aspect-[5/4]" />
        </div>
      </Section>

      <Section tone="bone">
        <div className="container-site mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-3xl bg-card p-8 text-center shadow-card md:p-12" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-blue" strokeWidth={1.75} />
              <h2 className="mt-5 text-3xl">Thanks, we've got it.</h2>
              <p className="body-lg mt-4">
                Someone from Wayfield will be in touch soon with next steps that make sense for your
                business. In the meantime, feel free to look through our{" "}
                <Link to="/faq" className="font-semibold text-blue underline-offset-4 hover:underline">
                  FAQ
                </Link>{" "}
                if you have more questions.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-3xl bg-card p-8 shadow-card md:p-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="business" className={labelClass}>
                  Business name
                </label>
                <input id="business" name="business" required className={fieldClass} placeholder="e.g. Maple Street Plumbing" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="industry" className={labelClass}>
                  Industry
                </label>
                <select id="industry" name="industry" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option>Local services</option>
                  <option>Restaurant</option>
                  <option>Professional services</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="links" className={labelClass}>
                  Website or social profiles <span className="font-normal text-slate">(optional)</span>
                </label>
                <input id="links" name="links" className={fieldClass} placeholder="yourbusiness.com, @yourbusiness" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="headache" className={labelClass}>
                  What's your biggest marketing headache right now?
                </label>
                <textarea id="headache" name="headache" required rows={4} className={fieldClass} placeholder="Tell us in your own words." />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="involvement" className={labelClass}>
                  Are you looking to do this yourself, or want us more involved from the start?
                </label>
                <select id="involvement" name="involvement" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option>Do it myself</option>
                  <option>Somewhere in between</option>
                  <option>Fully handled for me</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact" className={labelClass}>
                  Best way to reach you <span className="font-normal text-slate">(email or phone)</span>
                </label>
                <input id="contact" name="contact" required className={fieldClass} placeholder="you@example.com or (555) 123-4567" />
              </div>

              <PillButton type="submit" variant="cta" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
                Get my next steps
              </PillButton>

              <p className="text-sm leading-relaxed text-brown">
                We'll respond within one business day. No spam, no surprise sales calls, just a real
                answer to your question.
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
