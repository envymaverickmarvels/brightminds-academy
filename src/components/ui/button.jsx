"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 shadow-md hover:shadow-lg",
        secondary:
          "bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-500 shadow-md hover:shadow-lg",
        accent:
          "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus-visible:ring-primary-500",
        ghost:
          "text-text-primary-light dark:text-text-primary-dark hover:bg-muted-light dark:hover:bg-muted-dark",
        link:
          "text-primary-600 underline-offset-4 hover:underline",
        gradient:
          "gradient-hero text-white hover:opacity-90 shadow-lg hover:shadow-xl",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:ring-[#25D366] shadow-md hover:shadow-lg",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        default: "h-11 px-6 py-2",
        lg: "h-13 px-8 text-lg rounded-xl",
        xl: "h-14 px-10 text-xl rounded-xl",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    
    if (asChild) {
      return React.cloneElement(children, {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props,
      });
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };