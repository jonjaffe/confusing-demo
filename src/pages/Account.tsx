import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Account = () => {
  return (
    <div className="min-h-screen bg-brand-charcoal">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              My Account
            </h1>
            <p className="text-brand-gray-light text-lg max-w-2xl mx-auto">
              Account management features are coming soon! Sign up for our
              newsletter to stay updated.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-amber to-brand-magenta mx-auto rounded-full"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
