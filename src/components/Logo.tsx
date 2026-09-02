import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 32"
      aria-hidden="true"
      className={cn("h-7 w-auto", className)}
      fill="none"
    >
      <path d="M2 2h9l11 14-11 14H2l11-14L2 2Z" className="fill-indigo" />
      <path d="M15 2h9l11 14-11 14h-9l11-14L15 2Z" className="fill-blue" />
      <path d="M28 2h9l11 14-11 14h-9l11-14L28 2Z" className="fill-coral" />
    </svg>
  );
}

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-heading text-2xl font-bold tracking-tight lowercase",
          light ? "text-primary-foreground" : "text-indigo",
        )}
      >
        wayfield
      </span>
    </span>
  );
}
