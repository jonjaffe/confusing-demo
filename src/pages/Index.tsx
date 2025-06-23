import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RotateCcw, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { Button, Badge } from "@/components/tuxedo";

const Index = () => {
  // Mock product data
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 124,
      category: "Electronics",
      isOnSale: true,
      isFavorite: false,
    },
    {
      id: "2",
      name: "Luxury Leather Handbag",
      price: 189.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 89,
      category: "Fashion",
      isOnSale: false,
      isFavorite: true,
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      price: 249.99,
      originalPrice: 329.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.7,
      reviewCount: 156,
      category: "Technology",
      isOnSale: true,
      isFavorite: false,
    },
    {
      id: "4",
      name: "Designer Sunglasses",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 73,
      category: "Accessories",
      isOnSale: false,
      isFavorite: false,
    },
    {
      id: "5",
      name: "Premium Coffee Maker",
      price: 199.99,
      originalPrice: 249.99,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 92,
      category: "Home & Kitchen",
      isOnSale: true,
      isFavorite: true,
    },
    {
      id: "6",
      name: "Organic Skincare Set",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 118,
      category: "Beauty",
      isOnSale: false,
      isFavorite: false,
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=200&fit=crop",
      productCount: 234,
      href: "/category/electronics",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
      productCount: 156,
      href: "/category/fashion",
    },
    {
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      productCount: 89,
      href: "/category/home-garden",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
      productCount: 67,
      href: "/category/beauty",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment protection",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 bg-brand-primary-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-brand-car-blue/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-brand-car-blue/20 flex items-center justify-center group-hover:bg-brand-car-blue/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-brand-car-blue" />
                  </div>
                  <h3 className="font-semibold text-brand-primary-dark">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
                Compare by Category
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Find the best deals across all our comparison services and save
                money on your essential purchases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.href}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-brand-car-blue/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-brand-gray-light text-sm mb-3">
                      {category.productCount} products
                    </p>
                    <Button
                      variant="secondary"
                      size="small"
                      className="font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-brand-primary-gray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div className="space-y-4 mb-6 md:mb-0">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="primary"
                    className="bg-brand-car-blue/20 text-brand-car-blue border border-brand-car-blue/30"
                  >
                    Featured
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
                  Trending Products
                </h2>
                <p className="text-gray-600 text-lg">
                  Discover the most popular comparison services used by our
                  customers
                </p>
              </div>
              <Button
                variant="outline"
                className="border-brand-car-blue text-brand-car-blue hover:bg-brand-car-blue hover:text-white w-fit"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-brand-car-blue/10 via-brand-finance-orange/10 to-brand-car-blue/10 rounded-2xl p-12 border border-gray-200 shadow-sm">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark">
                  Stay Updated
                </h2>
                <p className="text-gray-600 text-lg">
                  Get the latest deals, comparison guides, and money-saving tips
                  delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-primary-dark placeholder:text-gray-500 focus:outline-none focus:border-brand-car-blue focus:ring-2 focus:ring-brand-car-blue"
                  />
                  <Button variant="primary" className="font-semibold px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Join millions of savvy shoppers. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
