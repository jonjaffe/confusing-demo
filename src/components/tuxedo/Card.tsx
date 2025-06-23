import React from "react";
import { cn } from "@/lib/utils";
import { BuilderBlocks } from "@builder.io/react";

export interface TuxedoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "small" | "medium" | "large";
  testId?: string;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, TuxedoCardProps>(
  (
    {
      className,
      variant = "default",
      padding = "medium",
      testId,
      children,
      ...props
    },
    ref,
  ) => {
    // Check if children is an array of Builder blocks
    const isBuilderBlocks = Array.isArray(children) && children.length > 0 && children[0]?.["@type"] === "@builder.io/sdk:Element";
    return (
      <div
        className={cn(
          // Base styles matching Confused.com design
          "bg-white text-brand-primary-dark transition-all duration-200",

          // Variant styles
          {
            "border-0": variant === "default",
            "border border-gray-200": variant === "outlined",
            "border border-gray-200 shadow-lg": variant === "elevated",
          },

          // Padding variants
          {
            "p-0": padding === "none",
            "p-3": padding === "small",
            "p-4": padding === "medium",
            "p-6": padding === "large",
          },

          className,
        )}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        {isBuilderBlocks ? (
          <BuilderBlocks blocks={children} parentElementId={props["builderBlock"]?.id} />
        ) : (
          children
        )}
      </div>
    );
  },
);

Card.displayName = "TuxedoCard";

export default Card;
