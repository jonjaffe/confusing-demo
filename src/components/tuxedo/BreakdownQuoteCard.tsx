import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const breakdownQuoteCardVariants = cva(
  "relative w-full max-w-96 flex flex-col",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

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
    className="w-4 h-4"
  >
    <path
      d="M9 0L6.75 2.32503L11.85 7.42502H0V10.65H11.85L6.75 15.75L9 18.075L17.925 9.07503L9 0Z"
      fill="white"
    />
  </svg>
);

export interface BreakdownQuoteCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof breakdownQuoteCardVariants> {
  vehicleReg?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  showIcon?: boolean;
  disabled?: boolean;
  onButtonClick?: () => void;
}

const BreakdownQuoteCard = React.forwardRef<
  HTMLDivElement,
  BreakdownQuoteCardProps
>(
  (
    {
      className,
      variant,
      vehicleReg = "ML18 UOE",
      title,
      description = "Choose from local, nationwide or European cover then see your prices",
      buttonText = "Get instant quotes",
      showIcon = true,
      disabled = false,
      onButtonClick,
      ...props
    },
    ref,
  ) => {
    const defaultTitle = `Get breakdown quotes for ${vehicleReg} in seconds`;

    return (
      <div
        className={cn(breakdownQuoteCardVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {/* Quote Card */}
        <div className="flex flex-col">
          {/* Header */}
          <div
            className="flex flex-col px-6 py-6 gap-4 bg-brand-car-blue"
            style={{ backgroundColor: "#58AAE0" }}
          >
            {/* Icon & Title */}
            <div className="flex items-start gap-4">
              {showIcon && (
                <div className="flex w-11 h-11 p-2 justify-center items-center rounded-full bg-brand-primary-dark flex-shrink-0">
                  <MotorBreakdownIcon />
                </div>
              )}
              <h2
                className="text-brand-primary-dark font-semibold text-xl leading-7"
                style={{
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  color: "#1F1F1F",
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "28px",
                }}
              >
                {title || defaultTitle}
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-brand-primary-dark"
              style={{
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                color: "#1F1F1F",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "26px",
              }}
            >
              {description}
            </p>

            {/* Button */}
            <button
              onClick={onButtonClick}
              disabled={disabled}
              className={cn(
                "flex w-60 h-16 px-6 py-4 items-center gap-2 rounded-xl bg-brand-primary-dark transition-all duration-200",
                disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-opacity-90 focus:ring-2 focus:ring-brand-primary-dark focus:ring-offset-2 focus:ring-offset-brand-car-blue",
              )}
              style={{ backgroundColor: "#1F1F1F" }}
            >
              <span
                className="text-brand-primary-white font-semibold text-lg leading-7"
                style={{
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                {buttonText}
              </span>
              <div className="flex w-8 h-8 p-1.5 justify-center items-center flex-shrink-0">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  },
);

BreakdownQuoteCard.displayName = "BreakdownQuoteCard";

export default BreakdownQuoteCard;
