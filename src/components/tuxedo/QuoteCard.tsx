import React from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export interface TuxedoQuoteCardProps {
  /** Vehicle registration number */
  vehicleReg?: string;
  /** Main title of the quote card */
  title?: string;
  /** Description text */
  description?: string;
  /** Button text */
  buttonText?: string;
  /** Button click handler */
  onButtonClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Show motor breakdown icon */
  showIcon?: boolean;
  /** Disable the button */
  disabled?: boolean;
}

// Motor breakdown icon component
const MotorBreakdownIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div
    className={cn(
      "flex items-center justify-center w-11 h-11 rounded-full bg-[rgb(31,31,31)]",
      className,
    )}
  >
    <svg
      width="29"
      height="25"
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-6"
    >
      <path
        d="M17.8999 6.20007L15.1001 11.1001L22.8999 24.8H28.6001L17.8999 6.20007Z"
        fill="white"
      />
      <path
        d="M17.2002 5L14.3999 0H14.2998L3.6001 18.6001H9.3999L17.2002 5Z"
        fill="white"
      />
      <path
        d="M2.8999 19.8L0.100098 24.7001L0 24.8H21.5L18.6001 19.8H2.8999Z"
        fill="white"
      />
    </svg>
  </div>
);

const QuoteCard = React.forwardRef<HTMLDivElement, TuxedoQuoteCardProps>(
  (
    {
      vehicleReg = "ML18 UOE",
      title = "Get breakdown quotes for {vehicleReg} in seconds",
      description = "Choose from local, nationwide or European cover then see your prices",
      buttonText = "Get instant quotes",
      onButtonClick,
      className,
      showIcon = true,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    // Replace {vehicleReg} placeholder in title with actual vehicle registration
    const formattedTitle = title.replace("{vehicleReg}", vehicleReg);

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col w-full max-w-sm bg-white rounded-none overflow-hidden shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header with blue background */}
        <div className="flex flex-col p-6 bg-[rgb(88,170,224)] gap-6">
          {/* Icon and Title Row */}
          <div className="flex items-start gap-4">
            {showIcon && <MotorBreakdownIcon />}
            <h3 className="flex-1 text-[rgb(31,31,31)] font-bold text-[22px] leading-[28px] font-[Poppins,system-ui,sans-serif]">
              {formattedTitle}
            </h3>
          </div>

          {/* Description */}
          <p className="text-[rgb(31,31,31)] text-lg leading-[26px] font-normal font-[Poppins,system-ui,sans-serif]">
            {description}
          </p>

          {/* Button */}
          <Button
            variant="primary"
            size="large"
            onClick={onButtonClick}
            disabled={disabled}
            className="bg-[rgb(31,31,31)] hover:bg-gray-800 text-white font-bold text-lg leading-[26px] px-6 py-4 rounded-xl h-16 font-[Poppins,system-ui,sans-serif] w-60"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-[18px] w-[18px]" />
          </Button>
        </div>
      </div>
    );
  },
);

QuoteCard.displayName = "TuxedoQuoteCard";

export default QuoteCard;
