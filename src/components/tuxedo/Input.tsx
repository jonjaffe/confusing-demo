import React from "react";
import { cn } from "@/lib/utils";

export interface TuxedoInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  testId?: string;
}

const Input = React.forwardRef<HTMLInputElement, TuxedoInputProps>(
  ({ className, label, error, fullWidth = false, testId, ...props }, ref) => {
    return (
      <div className={cn("space-y-2", { "w-full": fullWidth })}>
        {label && (
          <label className="block text-sm font-medium text-brand-primary-dark">
            {label}
          </label>
        )}
        <input
          className={cn(
            // Base styles matching Confused.com design
            "flex h-9 px-3 py-2 text-sm transition-colors",
            "bg-white border border-gray-300 text-brand-primary-dark",
            "placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-brand-car-blue focus:border-brand-car-blue",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-brand-primary-gray",

            // Error state
            {
              "border-red-500 focus:ring-red-500 focus:border-red-500": error,
            },

            // Full width
            {
              "w-full": fullWidth,
            },

            className,
          )}
          data-testid={testId}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "TuxedoInput";

export default Input;
