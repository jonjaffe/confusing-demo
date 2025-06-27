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
    height="25"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[29px] h-[25px] flex-shrink-0"
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
    className="w-[18px] h-[18px] flex-shrink-0"
  >
    <path
      d="M9 0L6.75 2.32503L11.85 7.42502H0V10.65H11.85L6.75 15.75L9 18.075L17.925 9.07503L9 0Z"
      fill="white"
    />
  </svg>
);

export const MotorBreakdownQuoteCard: React.FC<
  MotorBreakdownQuoteCardProps
> = ({
  vehicleReg = "ML18 UOE",
  title,
  description = "Choose from local, nationwide or European cover then see your prices",
  buttonText = "Get instant quotes",
  showIcon = true,
  disabled = false,
  onButtonClick,
  className,
}) => {
  const defaultTitle = `Get breakdown quotes for ${vehicleReg} in seconds`;
  const displayTitle = title || defaultTitle;

  return (
    <div className={cn("flex flex-col w-full max-w-sm", className)}>
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 p-6 bg-brand-car-blue">
          {/* Icon & Title */}
          <div className="flex items-start gap-4 w-full">
            {showIcon && (
              <div className="flex w-[43px] h-[43px] p-2 justify-center items-center rounded-full bg-brand-primary-dark shrink-0">
                <MotorBreakdownIcon />
              </div>
            )}
            <h3 className="text-brand-primary-dark text-[22px] font-semibold leading-7 font-['Poppins'] flex-1">
              {displayTitle}
            </h3>
          </div>

          {/* Description */}
          <p className="text-brand-primary-dark text-lg font-normal leading-[26px] font-['Poppins'] w-full">
            {description}
          </p>

          {/* Button */}
          <button
            onClick={onButtonClick}
            disabled={disabled}
            className={cn(
              "flex w-60 h-16 px-6 py-4 items-center gap-2 rounded-xl bg-brand-primary-dark transition-all duration-200",
              "hover:bg-gray-800 active:bg-gray-900",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-primary-dark",
            )}
          >
            <span className="text-white text-lg font-semibold leading-[26px] font-['Poppins'] flex-1">
              {buttonText}
            </span>
            <div className="flex w-8 h-8 p-[7px] justify-center items-center shrink-0">
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotorBreakdownQuoteCard;
