import React from "react";
import { cn } from "@/lib/utils";

export interface TuxedoQuoteCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  testId?: string;
}

const QuoteCard = React.forwardRef<HTMLDivElement, TuxedoQuoteCardProps>(
  (
    {
      title = "Get breakdown quotes for ML18 UOE in seconds",
      description = "Choose from local, nationwide or European cover then see your prices",
      buttonText = "Get instant quotes",
      onButtonClick,
      className,
      testId,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "flex w-full max-w-sm flex-col justify-center items-start gap-6 bg-white rounded-lg overflow-hidden shadow-sm",
          className,
        )}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        {/* Quote Card Header */}
        <div className="flex flex-col items-start w-full bg-[#58AAE0] p-6 gap-4">
          {/* Icon & Title */}
          <div className="flex items-start gap-4 w-full">
            {/* Motor Breakdown Icon */}
            <div className="flex w-[43px] h-[43px] p-2 justify-center items-center rounded-full bg-[#1F1F1F] flex-shrink-0">
              <svg
                width="29"
                height="25"
                viewBox="0 0 29 25"
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

            {/* Title */}
            <h3 className="flex-1 text-[#1F1F1F] font-['Poppins',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-[22px] font-semibold leading-[28px] tracking-normal">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="w-full text-[#1F1F1F] font-['Poppins',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-[18px] font-normal leading-[26px]">
            {description}
          </p>

          {/* CTA Button */}
          <button
            onClick={onButtonClick}
            className="flex w-60 h-16 px-6 py-4 items-center gap-2 rounded-xl bg-[#1F1F1F] hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <span className="text-white font-['Poppins',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-[18px] font-semibold leading-[26px]">
              {buttonText}
            </span>
            {/* Arrow Icon */}
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
          </button>
        </div>
      </div>
    );
  },
);

QuoteCard.displayName = "TuxedoQuoteCard";

export default QuoteCard;
