import { ImageIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const LABEL = "Photo placeholder — image coming later";

/**
 * Small / framed photo slot. Renders a real image when `image` is provided,
 * otherwise a solid warm block with icon + label, no overlay.
 */
export function PhotoPlaceholder({
  className,
  aspect = "aspect-[4/3]",
  image,
  alt = "",
}: {
  className?: string;
  aspect?: string;
  image?: string | undefined;
  alt?: string;
}) {
  if (image) {
    return (
      <div className={cn("w-full overflow-hidden rounded-3xl bg-placeholder", aspect, className)}>
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={LABEL}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-3xl bg-placeholder text-center text-on-photo/90",
        aspect,
        className,
      )}
    >
      <ImageIcon className="h-8 w-8 opacity-80" strokeWidth={1.5} />
      <span className="px-6 text-sm font-medium tracking-wide">{LABEL}</span>
    </div>
  );
}

/**
 * Full-width hero-style photo slot with a navy overlay and white text on top.
 */
export function PhotoHero({
  children,
  className,
  align = "left",
  minHeight = "min-h-[520px] md:min-h-[600px]",
  backgroundImage,
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
  minHeight?: string;
  backgroundImage?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-placeholder", minHeight, className)}>
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/55" />
        </>
      ) : (
        /* Placeholder marker (sits beneath overlay) */
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-5 z-0 flex flex-col items-center gap-2 text-on-photo/70"
        >
          <ImageIcon className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs font-medium tracking-wide">{LABEL}</span>
        </div>
      )}
      {/* Navy overlay */}
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-overlay" />
      <div
        className={cn(
          "container-site relative z-10 flex min-h-[inherit] flex-col justify-center py-24 text-on-photo",
          align === "center" ? "items-center text-center" : "items-start",
        )}
      >
        {children}
      </div>
    </section>
  );
}
