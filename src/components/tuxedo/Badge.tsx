import React from "react";
import { cn } from "@/lib/utils";

export interface TuxedoBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "small" | "medium" | "large";
  testId?: string;
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, TuxedoBadgeProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      testId,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        className={cn(
          // Base styles matching Tuxedo design
          "inline-flex items-center font-bold transition-all duration-200",

          // Size variants
          {
            "text-xs px-2 py-1": size === "small",
            "text-sm px-2.5 py-1": size === "medium",
            "text-base px-3 py-1.5": size === "large",
          },

          // Variant styles matching Confused.com color scheme
          {
            "bg-brand-car-blue text-white": variant === "primary",
            "bg-brand-finance-orange text-white": variant === "secondary",
            "bg-brand-pet-green text-white": variant === "success",
            "bg-yellow-500 text-brand-primary-dark": variant === "warning",
            "bg-red-600 text-white": variant === "danger",
            "bg-brand-life-cyan text-white": variant === "info",
          },

          className,
        )}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "TuxedoBadge";

export default Badge;
