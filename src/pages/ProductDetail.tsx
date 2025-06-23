import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-brand-charcoal">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Product Details
            </h1>
            <p className="text-brand-gray-light text-lg max-w-2xl mx-auto">
              Product ID: {id}
            </p>
            <p className="text-brand-gray-light text-lg max-w-2xl mx-auto">
              This page is coming soon! Full product details and purchasing
              options will be available here.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-amber to-brand-magenta mx-auto rounded-full"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
