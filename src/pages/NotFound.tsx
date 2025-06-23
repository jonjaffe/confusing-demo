import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/tuxedo";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-charcoal">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Large 404 */}
            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-brand-amber to-brand-magenta bg-clip-text text-transparent">
              404
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Page Not Found
              </h1>
              <p className="text-brand-gray-light text-lg">
                Sorry, we couldn't find the page you're looking for. It might
                have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/">
                <Button
                  variant="secondary"
                  size="large"
                  className="font-semibold px-8"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Button>
              </Link>

              <Link to="/shop">
                <Button
                  variant="outline"
                  size="large"
                  className="text-white hover:bg-brand-charcoal-medium px-8"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Browse Products
                </Button>
              </Link>
            </div>

            {/* Back Button */}
            <div className="pt-8">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="text-brand-gray-light hover:text-brand-amber"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="pt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-brand-amber to-brand-magenta mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
