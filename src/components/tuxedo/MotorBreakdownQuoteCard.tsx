import React from "react";
import { cn } from "@/lib/utils";

export interface MotorBreakdownQuoteCardProps {
  vehicleReg?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  showIcon?: boolean;
  disabled?: boolean;
  onButtonClick?: () => void;
  className?: string;
}

const MotorBreakdownIcon = () => (
  <svg
    width="29"
    height="28"
    viewBox="0 0 29 28"
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
);

const ArrowIcon = () => (
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
);

const MotorBreakdownQuoteCard: React.FC<MotorBreakdownQuoteCardProps> = ({
  vehicleReg = "ML18 UOE",
  title,
  description = "Choose from local, nationwide or European cover then see your prices",
  buttonText = "Get instant quotes",
  showIcon = true,
  disabled = false,
  onButtonClick,
  className,
}) => {
  const dynamicTitle =
    title || `Get breakdown quotes for ${vehicleReg} in seconds`;

  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg",
        className,
      )}
    >
      {/* Header */}
      <div className="flex flex-col gap-6 p-6 bg-brand-car-blue">
        {/* Icon & Title */}
        <div className="flex items-start gap-4">
          {showIcon && (
            <div className="flex items-center justify-center w-[43px] h-[43px] bg-[#1F1F1F] rounded-full flex-shrink-0">
              <MotorBreakdownIcon />
            </div>
          )}
          <h2
            className="text-[22px] font-bold leading-7 text-[#1F1F1F] flex-1"
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {dynamicTitle}
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-lg font-normal leading-[26px] text-[#1F1F1F]"
          style={{
            fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onButtonClick}
          disabled={disabled}
          className={cn(
            "flex items-center justify-center gap-2 w-60 h-16 px-6 py-4 bg-[#1F1F1F] rounded-xl transition-all duration-200",
            "hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:ring-offset-2 focus:ring-offset-brand-car-blue",
            disabled && "opacity-50 cursor-not-allowed hover:bg-[#1F1F1F]",
          )}
        >
          <span
            className="text-lg font-bold leading-[26px] text-white"
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {buttonText}
          </span>
          <div className="flex items-center justify-center w-8 h-8">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default MotorBreakdownQuoteCard;
export type { MotorBreakdownQuoteCardProps };
