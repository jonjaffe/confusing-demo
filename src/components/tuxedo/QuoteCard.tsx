import React from "react";
import { cn } from "@/lib/utils";

export interface TuxedoQuoteCardProps {
  vehicleReg?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  showIcon?: boolean;
  disabled?: boolean;
  onButtonClick?: () => void;
  className?: string;
}

const QuoteCard: React.FC<TuxedoQuoteCardProps> = ({
  vehicleReg = "ML18 UOE",
  title = "Get breakdown quotes for {vehicleReg} in seconds",
  description = "Choose from local, nationwide or European cover then see your prices",
  buttonText = "Get instant quotes",
  showIcon = true,
  disabled = false,
  onButtonClick,
  className,
  ...props
}) => {
  // Replace {vehicleReg} placeholder in title with actual vehicle registration
  const displayTitle = title.replace("{vehicleReg}", vehicleReg);

  const MotorBreakdownIcon = () => (
    <div className="flex w-[43px] h-[43px] p-2 justify-center items-center rounded-full bg-[#1F1F1F] flex-shrink-0">
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
    </div>
  );

  const ArrowIcon = () => (
    <div className="flex w-8 h-8 p-1.5 justify-center items-center flex-shrink-0">
      <svg
        width="18"
        height="18"
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
    </div>
  );

  return (
    <div
      className={cn(
        "flex w-full max-w-[384px] flex-col justify-center items-start gap-6 flex-shrink-0",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-start self-stretch">
        {/* Header */}
        <div className="flex p-6 flex-col items-start gap-4 self-stretch bg-[#58AAE0] rounded-t-lg">
          {/* Icon & Title */}
          <div className="flex items-start gap-4 self-stretch">
            {showIcon && <MotorBreakdownIcon />}
            <div className="flex-1 text-[#1F1F1F] font-['Poppins'] text-[22px] font-semibold leading-7">
              {displayTitle}
            </div>
          </div>

          {/* Description */}
          <div className="self-stretch text-[#1F1F1F] font-['Poppins'] text-lg font-normal leading-[26px]">
            {description}
          </div>

          {/* Button */}
          <button
            onClick={onButtonClick}
            disabled={disabled}
            className={cn(
              "flex w-[240px] h-16 px-6 py-4 items-center gap-2 rounded-xl bg-[#1F1F1F] transition-all duration-200",
              "hover:bg-[#2F2F2F] active:bg-[#0F0F0F]",
              "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#58AAE0]",
              disabled &&
                "opacity-50 cursor-not-allowed hover:bg-[#1F1F1F] active:bg-[#1F1F1F]",
            )}
          >
            <div className="text-white font-['Poppins'] text-lg font-semibold leading-[26px]">
              {buttonText}
            </div>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
export type { TuxedoQuoteCardProps };
