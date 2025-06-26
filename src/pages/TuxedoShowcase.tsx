import { useState } from "react";
import { Search, ShoppingCart, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Button,
  Input,
  Card,
  Badge,
  Modal,
  QuoteCard,
} from "@/components/tuxedo";

const TuxedoShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-charcoal">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {/* Page Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Tuxedo Components
            </h1>
            <p className="text-brand-gray-light text-lg max-w-2xl mx-auto">
              A showcase of all Tuxedo components integrated into our eCommerce
              app, matching the design system from tuxedo-test.confused.com
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-amber to-brand-magenta mx-auto rounded-full"></div>
          </div>

          {/* Buttons Section */}
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-bold text-white mb-6">Buttons</h2>
            <div className="space-y-6">
              {/* Button Variants */}
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Sizes
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="small">
                    Small
                  </Button>
                  <Button variant="primary" size="medium">
                    Medium
                  </Button>
                  <Button variant="primary" size="large">
                    Large
                  </Button>
                </div>
              </div>

              {/* Button States */}
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  States
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                  <Button variant="primary" loading>
                    Loading
                  </Button>
                  <Button variant="primary" fullWidth>
                    Full Width
                  </Button>
                </div>
              </div>

              {/* Buttons with Icons */}
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Button variant="primary">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline">
                    <Heart className="mr-2 h-4 w-4" />
                    Favorite
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Inputs Section */}
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-bold text-white mb-6">Inputs</h2>
            <div className="space-y-6 max-w-md">
              <Input placeholder="Basic input" />
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <Input
                label="Full Width Input"
                placeholder="This input spans full width"
                fullWidth
              />
              <Input
                label="Input with Error"
                placeholder="This has an error"
                error="This field is required"
              />
              <Input
                label="Disabled Input"
                placeholder="Disabled input"
                disabled
              />
            </div>
          </Card>

          {/* Badges Section */}
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-bold text-white mb-6">Badges</h2>
            <div className="space-y-6">
              {/* Badge Variants */}
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              {/* Badge Sizes */}
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Sizes
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Badge variant="primary" size="small">
                    Small
                  </Badge>
                  <Badge variant="primary" size="medium">
                    Medium
                  </Badge>
                  <Badge variant="primary" size="large">
                    Large
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Cards Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default" padding="medium">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Default Card
                </h3>
                <p className="text-brand-gray-light">
                  This is a default card with medium padding.
                </p>
              </Card>

              <Card variant="outlined" padding="large">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Outlined Card
                </h3>
                <p className="text-brand-gray-light">
                  This is an outlined card with large padding.
                </p>
              </Card>

              <Card variant="elevated" padding="small">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Elevated Card
                </h3>
                <p className="text-brand-gray-light">
                  This is an elevated card with small padding.
                </p>
              </Card>
            </div>
          </div>

          {/* Quote Cards Section */}
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-bold text-white mb-6">Quote Cards</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Default Quote Card
                </h3>
                <QuoteCard />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Custom Vehicle Registration
                </h3>
                <QuoteCard
                  vehicleReg="AB12 XYZ"
                  onButtonClick={() => alert("Getting quotes for AB12 XYZ...")}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Custom Content
                </h3>
                <QuoteCard
                  vehicleReg="LM19 ABC"
                  title="Get comprehensive insurance quotes for {vehicleReg}"
                  description="Compare prices from top insurers and find the best deal for your vehicle"
                  buttonText="Compare now"
                  onButtonClick={() => alert("Comparing insurance quotes...")}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Without Icon
                </h3>
                <QuoteCard
                  vehicleReg="XX99 ZZZ"
                  showIcon={false}
                  onButtonClick={() => alert("No icon version clicked")}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-amber mb-4">
                  Disabled State
                </h3>
                <QuoteCard
                  vehicleReg="DIS 123"
                  disabled={true}
                  buttonText="Coming soon"
                />
              </div>
            </div>
          </Card>

          {/* Modal Section */}
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-bold text-white mb-6">Modal</h2>
            <div className="space-y-4">
              <p className="text-brand-gray-light">
                Click the button below to open a modal dialog using the Tuxedo
                Modal component.
              </p>
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
            </div>
          </Card>

          {/* Modal Component */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Tuxedo Modal Example"
            size="medium"
          >
            <div className="space-y-4">
              <p className="text-brand-gray-light">
                This is an example of the Tuxedo Modal component. It features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-light">
                <li>Dark theme styling matching the design system</li>
                <li>Backdrop blur effect</li>
                <li>Multiple size options</li>
                <li>Accessible close functionality</li>
              </ul>
              <div className="pt-4 flex gap-4">
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Close Modal
                </Button>
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>

          {/* Summary */}
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-bold text-white mb-6">
              Tuxedo Integration Summary
            </h2>
            <div className="space-y-4 text-brand-gray-light">
              <p>
                <strong className="text-white">
                  Successfully integrated Tuxedo components:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-brand-amber">Button</strong> -
                  Multiple variants, sizes, and states
                </li>
                <li>
                  <strong className="text-brand-amber">Input</strong> - Form
                  inputs with labels, errors, and validation
                </li>
                <li>
                  <strong className="text-brand-amber">Card</strong> - Container
                  components with different styles
                </li>
                <li>
                  <strong className="text-brand-amber">Badge</strong> - Status
                  and label indicators
                </li>
                <li>
                  <strong className="text-brand-amber">Modal</strong> - Dialog
                  and overlay components
                </li>
              </ul>
              <p>
                All components follow the exact design specifications from the
                tuxedo-test.confused.com Storybook, including colors,
                typography, spacing, and interaction patterns.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TuxedoShowcase;
