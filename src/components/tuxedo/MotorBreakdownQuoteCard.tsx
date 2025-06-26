import React from "react";
import { cn } from "@/lib/utils";

export interface TuxedoMotorBreakdownQuoteCardProps {
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

const MotorBreakdownQuoteCard = React.forwardRef<
  HTMLDivElement,
  TuxedoMotorBreakdownQuoteCardProps
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
        className={cn("flex flex-col w-full max-w-sm", className)}
        {...props}
      >
        {/* Quote Card */}
        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Header */}
          <div className="flex flex-col gap-4 p-6 bg-brand-car-blue">
            {/* Icon & Title Row */}
            <div className="flex items-start gap-4">
              {showIcon && (
                <div className="flex items-center justify-center w-[43px] h-[43px] rounded-full bg-brand-primary-dark flex-shrink-0">
                  <svg
                    width="29"
                    height="25"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[29px] h-[25px]"
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
              )}

              {/* Title */}
              <h2 className="flex-1 text-brand-primary-dark text-xl md:text-[22px] font-bold leading-tight font-['Poppins',_'Inter',_-apple-system,_'Roboto',_'Helvetica',_sans-serif]">
                {displayTitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-brand-primary-dark text-lg leading-relaxed font-['Poppins',_'Inter',_-apple-system,_'Roboto',_'Helvetica',_sans-serif]">
              {description}
            </p>

            {/* Button */}
            <button
              onClick={onButtonClick}
              disabled={disabled}
              className={cn(
                "flex items-center justify-center gap-2 w-full max-w-[240px] h-16 px-6 py-4 rounded-xl bg-brand-primary-dark text-white text-lg font-bold transition-all duration-200 font-['Poppins',_'Inter',_-apple-system,_'Roboto',_'Helvetica',_sans-serif]",
                "hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:ring-offset-brand-car-blue",
                {
                  "opacity-50 cursor-not-allowed": disabled,
                  "active:scale-95": !disabled,
                },
              )}
            >
              <span className="flex-1 text-left">{buttonText}</span>
              <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    d="M9 0L6.75 2.32503L11.85 7.42502H0V10.65H11.85L6.75 15.75L9 18.075L17.925 9.07503L9 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  },
);

MotorBreakdownQuoteCard.displayName = "TuxedoMotorBreakdownQuoteCard";

export default MotorBreakdownQuoteCard;
