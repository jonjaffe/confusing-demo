import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button, Input } from "@/components/tuxedo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Best Sellers", href: "/best-sellers" },
        { name: "Sale", href: "/sale" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Women", href: "/women" },
        { name: "Men", href: "/men" },
        { name: "Accessories", href: "/accessories" },
        { name: "Shoes", href: "/shoes" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-brand-charcoal text-white border-t border-brand-charcoal-light">
      {/* Newsletter Section */}
      <div className="border-b border-brand-charcoal-light">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Stay in the Loop</h3>
            <p className="text-brand-gray-light text-lg">
              Get the latest updates on new arrivals, exclusive deals, and
              fashion trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                fullWidth
              />
              <Button variant="secondary" className="font-semibold px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-brand-gray">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-amber to-brand-magenta"></div>
              <span className="text-2xl font-bold">Luxe</span>
            </div>
            <p className="text-brand-gray-light leading-relaxed">
              Premium fashion that defines your style. Discover luxury pieces
              crafted with attention to detail and timeless elegance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-amber" />
                <span className="text-brand-gray-light">
                  123 Fashion Ave, New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-brand-amber" />
                <span className="text-brand-gray-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-brand-amber" />
                <span className="text-brand-gray-light">hello@luxe.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.href}
                  className="p-2 rounded-lg bg-brand-charcoal-medium hover:bg-brand-amber hover:text-brand-charcoal transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-brand-gray-light hover:text-brand-amber transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-charcoal-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-gray-light">
            <div>© {currentYear} Luxe. All rights reserved.</div>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-brand-amber transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-brand-amber transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="hover:text-brand-amber transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
