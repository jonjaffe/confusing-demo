import React from "react";
import { cn } from "@/lib/utils";

export interface TuxedoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  testId?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, TuxedoButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      fullWidth = false,
      loading = false,
      disabled,
      testId,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          // Base styles matching Tuxedo design
          "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[rgb(31,31,31)] disabled:opacity-50 disabled:cursor-not-allowed",

          // Size variants
          {
            "text-xs px-3 py-1.5 h-7": size === "small",
            "text-sm px-4 py-2 h-9": size === "medium",
            "text-base px-6 py-3 h-11": size === "large",
          },

          // Variant styles - Confused.com brand colors
          {
            // Primary - Car blue (main CTA color)
            "bg-brand-car-blue text-white hover:bg-blue-600 focus:ring-brand-car-blue":
              variant === "primary",

            // Secondary - Finance orange (secondary CTA color)
            "bg-brand-finance-orange text-white hover:bg-orange-600 focus:ring-brand-finance-orange":
              variant === "secondary",

            // Outline - Clean modern outline
            "border border-brand-primary-dark text-brand-primary-dark bg-transparent hover:bg-brand-primary-gray focus:ring-brand-primary-dark":
              variant === "outline",

            // Ghost - Subtle hover state
            "text-brand-primary-dark bg-transparent hover:bg-brand-primary-gray focus:ring-brand-primary-dark":
              variant === "ghost",

            // Danger - Red variant
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600":
              variant === "danger",
          },

          // Full width
          {
            "w-full": fullWidth,
          },

          // Loading state
          {
            "cursor-not-allowed": loading,
          },

          className,
        )}
        disabled={disabled || loading}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "TuxedoButton";

export default Button;
