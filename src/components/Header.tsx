import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button, Input, Badge } from "@/components/tuxedo";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 3; // Placeholder cart count

  const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Business", href: "/business-insurance" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Components", href: "/tuxedo" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-brand-primary-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-primary-dark/90">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 mr-8">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-car-blue to-brand-finance-orange"></div>
          <span className="text-xl font-bold text-white">Confused Store</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-car-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray z-10" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              fullWidth
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Button - Mobile */}
          <Button
            variant="ghost"
            size="small"
            className="md:hidden text-gray-300 hover:text-brand-car-blue p-2"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* User Account */}
          <Link to="/account">
            <Button
              variant="ghost"
              size="small"
              className="text-gray-300 hover:text-brand-car-blue p-2"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          {/* Shopping Cart */}
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="small"
              className="text-gray-300 hover:text-brand-car-blue p-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            {cartItemCount > 0 && (
              <Badge
                variant="danger"
                size="small"
                className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center bg-brand-travel-coral"
              >
                {cartItemCount}
              </Badge>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="small"
            className="md:hidden text-gray-300 hover:text-brand-car-blue p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "max-h-96 border-b border-brand-charcoal-light"
            : "max-h-0",
        )}
      >
        <div className="bg-gray-50 px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 z-10" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              fullWidth
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-2 py-3 text-sm font-medium text-brand-primary-dark hover:text-brand-car-blue transition-colors rounded-md hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
