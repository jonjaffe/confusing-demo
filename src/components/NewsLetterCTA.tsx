import { Button } from "@/components/tuxedo";

interface NewsLetterCTAProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  disclaimer?: string;
  backgroundGradient?: boolean;
  className?: string;
  onSubmit?: (email: string) => void;
}

const NewsLetterCTA = ({
  title = "Stay Updated",
  description = "Get the latest deals, comparison guides, and money-saving tips delivered straight to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  buttonVariant = "primary",
  disclaimer = "Join millions of savvy shoppers. Unsubscribe anytime.",
  backgroundGradient = true,
  className = "",
  onSubmit,
}: NewsLetterCTAProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    if (onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center rounded-2xl p-12 border border-gray-200 shadow-sm ${
          backgroundGradient 
            ? 'bg-gradient-to-r from-brand-car-blue/10 via-brand-finance-orange/10 to-brand-car-blue/10' 
            : 'bg-white'
        }`}>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
              {title}
            </h2>
            <p className="text-gray-600 text-lg">
              {description}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center">
              <input
                type="email"
                name="email"
                placeholder={placeholder}
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-primary-dark placeholder:text-gray-500 focus:outline-none focus:border-brand-car-blue focus:ring-2 focus:ring-brand-car-blue"
                required
              />
              <Button 
                type="submit" 
                variant={buttonVariant} 
                className="font-semibold px-8"
              >
                {buttonText}
              </Button>
            </form>
            <p className="text-sm text-gray-500">
              {disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterCTA; 