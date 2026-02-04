import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300",
        secondary: "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300",
        accent: "bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300",
        outline: "border border-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };