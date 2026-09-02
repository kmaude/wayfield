import { Link, type LinkProps } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const pillVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        cta: "bg-coral text-accent-foreground hover:bg-coral-hover shadow-[0_6px_18px_-8px_oklch(0.7_0.19_35/0.7)]",
        primary: "bg-indigo text-primary-foreground hover:bg-indigo/90",
        outline: "border-2 border-indigo text-indigo hover:bg-indigo hover:text-primary-foreground",
        "outline-light":
          "border-2 border-on-photo/80 text-on-photo hover:bg-on-photo hover:text-indigo",
        soft: "bg-bone text-indigo hover:bg-border",
      },
      size: {
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-8 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type PillLinkProps = LinkProps &
  VariantProps<typeof pillVariants> & {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
  };

export function PillLink({ variant, size, className, children, ...props }: PillLinkProps) {
  return (
    <Link className={cn(pillVariants({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
}

type PillButtonProps = ComponentProps<"button"> & VariantProps<typeof pillVariants>;

export function PillButton({ variant, size, className, ...props }: PillButtonProps) {
  return <button className={cn(pillVariants({ variant, size }), className)} {...props} />;
}
