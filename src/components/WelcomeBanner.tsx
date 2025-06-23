import React from "react";

interface WelcomeBannerProps {
  name?: string;
  className?: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ name, className = "" }) => {
    const displayName = name || "there";
  return (
    <div className={`w-full bg-gradient-to-r from-brand-car-blue to-brand-finance-orange text-white py-6 px-4 rounded-xl shadow-md text-center font-bold text-2xl mb-6 ${className}`}>
      Welcome, {displayName}!
    </div>
  );
};

export default WelcomeBanner; 