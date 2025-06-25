import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/tuxedo";

export interface TuxedoBreakdownQuoteCardProps {
  vehicleReg?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  showIcon?: boolean;
  disabled?: boolean;
  onButtonClick?: () => void;
  className?: string;
  testId?: string;
}

const MotorBreakdownIcon = () => (
  <svg
    width="29"
    height="28"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
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
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-2"
  >
    <path
      d="M9 0L6.75 2.32503L11.85 7.42502H0V10.65H11.85L6.75 15.75L9 18.075L17.925 9.07503L9 0Z"
      fill="currentColor"
    />
  </svg>
);

const BreakdownQuoteCard = React.forwardRef<
  HTMLDivElement,
  TuxedoBreakdownQuoteCardProps
>(
  (
    {
      vehicleReg = "ML18 UOE",
      title,
      description = "Choose from local, nationwide or European cover then see your prices",
      buttonText = "Get instant quotes",
      showIcon = true,
      disabled = false,
      onButtonClick,
      className,
      testId,
      ...props
    },
    ref,
  ) => {
    const displayTitle =
      title || `Get breakdown quotes for ${vehicleReg} in seconds`;

    return (
      <div
        ref={ref}
        data-testid={testId}
        className={cn(
          "flex flex-col w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header with blue background */}
        <div
          className="flex flex-col p-6 gap-4"
          style={{ backgroundColor: "#58AAE0" }}
        >
          {/* Icon and Title */}
          <div className="flex items-start gap-4">
            {showIcon && (
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-black p-2 flex-shrink-0">
                <MotorBreakdownIcon />
              </div>
            )}
            <h2
              className="text-xl md:text-[22px] font-bold leading-7 text-black flex-1"
              style={{
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {displayTitle}
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-lg text-black leading-[26px]"
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {description}
          </p>

          {/* Button */}
          <button
            onClick={onButtonClick}
            disabled={disabled}
            className={cn(
              "flex items-center justify-center w-60 h-16 px-6 py-4 rounded-xl bg-black text-white font-bold text-lg leading-[26px] transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed",
              "max-w-full",
            )}
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            <span>{buttonText}</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    );
  },
);

BreakdownQuoteCard.displayName = "TuxedoBreakdownQuoteCard";

export default BreakdownQuoteCard;
