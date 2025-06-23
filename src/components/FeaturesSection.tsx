import React from "react";
import { BuilderBlocks } from "@builder.io/react";

interface FeaturesSectionProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ children, className = "", ...props }) => {
  const isBuilderBlocks = Array.isArray(children) && children.length > 0 && children[0]?.["@type"] === "@builder.io/sdk:Element";
  return (
    <section className={`py-16 bg-brand-primary-gray ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isBuilderBlocks ? (
            <BuilderBlocks blocks={children} parentElementId={props["builderBlock"]?.id} />
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 