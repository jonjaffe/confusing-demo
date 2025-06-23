import { useState } from "react";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, Badge } from "@/components/tuxedo";
import { cn } from "@/lib/utils";

const BusinessInsurance = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const businessTypes = [
    {
      title: "Employers liability insurance",
      description: "Legal requirement if you have employees",
      required: true,
    },
    {
      title: "Public liability insurance",
      description: "Protects against claims from the public",
      required: false,
    },
    {
      title: "Professional indemnity insurance",
      description: "Covers professional advice and services",
      required: false,
    },
    {
      title: "Self-employed insurance",
      description: "Tailored cover for solo professionals",
      required: false,
    },
    {
      title: "Start up insurance",
      description: "Perfect for new businesses",
      required: false,
    },
  ];

  const benefits = [
    {
      title: "Service providers",
      description:
        "From consultants to cleaners, protect your service business",
    },
    {
      title: "Shop owners",
      description: "Cover for retail businesses and customer interactions",
    },
    {
      title: "Tradesperson",
      description: "Protection for skilled trade professionals",
    },
    {
      title: "Digital professionals",
      description: "Coverage for the modern digital economy",
    },
  ];

  const faqItems = [
    {
      question: "I work from home. How could business insurance help me?",
      answer:
        "Home business insurance can protect your equipment, provide liability cover, and protect your income if you can't work due to illness or injury.",
    },
    {
      question: "Can I get insurance before registering my business?",
      answer:
        "Yes, you can get business insurance before officially registering your company. This ensures you're covered from day one of trading.",
    },
    {
      question: "Is business insurance mandatory?",
      answer:
        "Employers' liability insurance is mandatory if you have employees. Other types like public liability may be required by clients or landlords.",
    },
    {
      question: "Is business insurance tax deductible?",
      answer:
        "Yes, business insurance premiums are generally tax deductible as a business expense, which can help reduce your tax bill.",
    },
    {
      question: "Who can help me if I claim?",
      answer:
        "Our partner Simply Business provides expert support throughout the claims process, helping you get back to business quickly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Breadcrumbs */}
        <div className="bg-[rgb(160,138,221)] px-4 py-2">
          <div className="container mx-auto">
            <nav className="text-sm text-white">
              <span>Home</span> / <span>Business Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[rgb(160,138,221)] py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Business insurance
                </h1>
                <p className="text-xl">
                  Get your personalised business insurance quote today
                </p>
                <Button
                  variant="secondary"
                  size="large"
                  className="bg-brand-primary-dark text-white hover:bg-gray-800"
                >
                  Get quote
                </Button>
              </div>

              <Card
                variant="outlined"
                padding="large"
                className="bg-[rgb(189,173,231)] border-white/20"
              >
                <div className="space-y-4">
                  {[
                    "Fill in your business' details",
                    "Find the cover you need in minutes",
                    "Choose the right quote for you",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-4 h-4 text-[rgb(160,138,221)]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What is business insurance */}
        <section className="py-16 bg-[rgb(189,173,231)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
                What is business insurance?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Business insurance helps protect your company from unexpected
                costs. From covering legal claims to replacing damaged
                equipment, it gives you peace of mind so you can focus on
                growing your business. Whether you're a sole trader or have
                employees, the right cover can save you thousands.
              </p>
            </div>
          </div>
        </section>

        {/* How can we help */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
                How can we help?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work with Simply Business, the UK's leading business
                insurance broker, to find you competitive quotes from top
                insurers. Compare policies side by side and choose the cover
                that's right for your business.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[rgb(160,138,221)]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Discover</h3>
            <Button
              variant="secondary"
              size="large"
              className="bg-brand-primary-dark text-white hover:bg-gray-800"
            >
              Get quote
            </Button>
          </div>
        </section>

        {/* Expert Quote */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark text-center mb-12">
                What our business insurance expert says
              </h2>

              <Card variant="outlined" padding="large" className="bg-gray-50">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-[rgb(160,138,221)] flex items-center justify-center text-white font-bold text-xl">
                    AR
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-gray-700 italic mb-4">
                      "Business insurance isn't just about ticking boxes - it's
                      about protecting everything you've worked hard to build.
                      The right policy can be the difference between a minor
                      setback and business closure."
                    </blockquote>
                    <div>
                      <div className="font-semibold text-brand-primary-dark">
                        Alex Ryde
                      </div>
                      <div className="text-gray-600">
                        SME Product Specialist
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Simply Business
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Insurance Types */}
        <section className="py-16 bg-[rgb(189,173,231)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark text-center mb-12">
              What business insurance cover can I get?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessTypes.map((type, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  padding="large"
                  className="bg-white h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-brand-primary-dark text-lg leading-tight">
                        {type.title}
                      </h3>
                      {type.required && (
                        <Badge variant="warning" size="small">
                          Required
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How could insurance benefit */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark text-center mb-12">
              How could insurance benefit my business?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  padding="large"
                  className="text-center h-full"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[rgb(160,138,221)] mx-auto flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {benefit.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-bold text-brand-primary-dark">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Information */}
        <section className="py-16 bg-[rgb(189,173,231)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
                How much does business insurance cost?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Business insurance costs vary depending on your industry,
                business size, and coverage needs. Public liability insurance
                can start from as little as £50 per year, while comprehensive
                packages for larger businesses may cost several hundred pounds
                annually. Get a personalised quote to see exact pricing for your
                business.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark text-center mb-12">
                Need more help with business insurance?
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    padding="none"
                    className="overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                    >
                      <span className="font-semibold text-brand-primary-dark pr-4">
                        {item.question}
                      </span>
                      {openFAQ === index ? (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4 text-gray-700 border-t border-gray-100">
                        <p className="pt-4">{item.answer}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[rgb(160,138,221)]">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to protect your business?
              </h2>
              <p className="text-xl text-white/90">
                Get a personalised quote in minutes
              </p>
              <Button
                variant="secondary"
                size="large"
                className="bg-brand-primary-dark text-white hover:bg-gray-800"
              >
                Get your business insurance quote
              </Button>
            </div>
          </div>
        </section>

        {/* Page Review Info */}
        <section className="py-8 bg-[rgb(160,138,221)]">
          <div className="container mx-auto px-4">
            <div className="text-center text-white/80 text-sm">
              <p>
                Page last reviewed: January 2025 | Reviewed by Alex Ryde, SME
                Product Specialist
              </p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 bg-brand-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center text-white/70 text-xs max-w-4xl mx-auto">
              <p>
                Confused.com is an intermediary and receives commission from
                Simply Business. We're a credit broker, not a lender. We work
                with carefully selected insurance partners to help you find the
                right cover.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessInsurance;
