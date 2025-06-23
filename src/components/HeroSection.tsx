import { ArrowRight, Play } from "lucide-react";
import { Button, Badge } from "@/components/tuxedo";

interface HeroSectionProps {
  badgeText?: string;
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  mainHeading?: string;
  gradientText?: string;
  subHeading?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  primaryButtonSize?: 'small' | 'medium' | 'large';
  secondaryButtonText?: string;
  secondaryButtonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  secondaryButtonSize?: 'small' | 'medium' | 'large';
  showStats?: boolean;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  showScrollIndicator?: boolean;
  backgroundGradient?: boolean;
  animatedBackground?: boolean;
  className?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  statLabelsLight?: boolean;
  personName?: string;
}

const HeroSection = ({
  badgeText = '✨ New Collection Available',
  badgeVariant = 'secondary',
  mainHeading = 'Compare & Save',
  gradientText = 'On Everything',
  subHeading = 'You Need',
  subtitle = 'From insurance to energy, mobiles to mortgages. Find the best deals and compare prices to save money on all your essentials.',
  primaryButtonText = 'Shop Collection',
  primaryButtonVariant = 'secondary',
  primaryButtonSize = 'large',
  secondaryButtonText = 'Watch Story',
  secondaryButtonVariant = 'outline',
  secondaryButtonSize = 'large',
  showStats = true,
  stat1Value = '50K+',
  stat1Label = 'Happy Customers',
  stat2Value = '1000+',
  stat2Label = 'Premium Products',
  stat3Value = '98%',
  stat3Label = 'Satisfaction Rate',
  showScrollIndicator = true,
  backgroundGradient = true,
  animatedBackground = true,
  className = '',
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  statLabelsLight = false,
  personName,
}: HeroSectionProps) => {
  const statLabelClass = statLabelsLight ? 'text-white' : 'text-brand-gray-light';
  return (
    <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-brand-primary-dark">
        {/* Gradient overlay */}
        {backgroundGradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-brand-car-blue/20 via-transparent to-brand-finance-orange/20"></div>
        )}

        {/* Animated background elements */}
        {animatedBackground && (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-car-blue/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-finance-orange/10 blur-3xl animate-pulse delay-1000"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              variant={badgeVariant}
              size="medium"
            >
              {badgeText}
            </Badge>
          </div>

          {/* Person Name (optional) */}
          {personName && (
            <span className="block text-3xl md:text-4xl font-extrabold text-brand-car-blue mb-4 drop-shadow">
              {personName}
            </span>
          )}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {mainHeading}
            <span className="block bg-gradient-to-r from-brand-car-blue to-brand-finance-orange bg-clip-text text-transparent">
              {gradientText}
            </span>
            {subHeading}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              variant={primaryButtonVariant}
              size={primaryButtonSize}
              className="font-bold group"
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant={secondaryButtonVariant}
              size={secondaryButtonSize}
              className="text-white hover:bg-brand-charcoal-medium group"
              onClick={onSecondaryButtonClick}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {secondaryButtonText}
            </Button>
          </div>

          {/* Stats */}
          {showStats && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stat1Value}</div>
                <div className={`text-sm ${statLabelClass}`}>
                  {stat1Label}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-brand-gray"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stat2Value}</div>
                <div className={`text-sm ${statLabelClass}`}>
                  {stat2Label}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-brand-gray"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stat3Value}</div>
                <div className={`text-sm ${statLabelClass}`}>
                  {stat3Label}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-brand-gray-light rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-gray-light rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
