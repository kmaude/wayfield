import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Section({
  className,
  tone = "cream",
  ...props
}: ComponentProps<"section"> & { tone?: "cream" | "bone" | "white" | "indigo" }) {
  const tones = {
    cream: "bg-cream",
    bone: "bg-bone",
    white: "bg-card",
    indigo: "bg-indigo text-primary-foreground",
  };
  return <section className={cn("section-pad", tones[tone], className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag
        className={cn(
          Tag === "h1"
            ? "text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
            : "text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-[1.15]",
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
