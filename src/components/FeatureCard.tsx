import React from "react";

interface FeatureCardProps {
  image?: string; // image URL or icon URL
  headline: string;
  detail: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image = "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=200&fit=crop", headline, detail }) => {
  return (
    <div className="text-center space-y-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-brand-car-blue/50 transition-all duration-300 group shadow-sm">
      <div className="w-12 h-12 mx-auto rounded-lg bg-brand-car-blue/20 flex items-center justify-center group-hover:bg-brand-car-blue/30 transition-colors overflow-hidden">
        <img src={image} alt={headline} className="h-6 w-6 object-contain mx-auto" />
      </div>
      <h3 className="font-semibold text-brand-primary-dark">
        {headline}
      </h3>
      <p className="text-sm text-gray-600">{detail}</p>
    </div>
  );
};

export default FeatureCard; 