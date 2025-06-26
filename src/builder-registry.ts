import { Builder } from "@builder.io/react";
import {
  Badge,
  Button,
  Card,
  Input,
  Modal,
  QuoteCard,
} from "./components/tuxedo";
import HeroSection from "./components/HeroSection";
import NewsLetterCTA from "./components/NewsLetterCTA";
import FeatureCard from "./components/FeatureCard";
import FeaturesSection from "./components/FeaturesSection";
import WelcomeBanner from "./components/WelcomeBanner";

// Register all Tuxedo components with Builder.io
Builder.registerComponent(Badge, {
  name: "Tuxedo Badge",
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["primary", "secondary", "success", "warning", "danger", "info"],
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "enum",
      enum: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Badge",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Tuxedo Button",
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["primary", "secondary", "outline", "ghost", "danger"],
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "enum",
      enum: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Button",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
    {
      name: "onClick",
      type: "action",
      defaultValue: "() => {}",
    },
  ],
});

Builder.registerComponent(Card, {
  name: "Tuxedo Card",
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["default", "outlined", "elevated"],
      defaultValue: "default",
    },
    {
      name: "padding",
      type: "enum",
      enum: ["none", "small", "medium", "large"],
      defaultValue: "medium",
    },
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [
        {
          "@type": "@builder.io/sdk:Element",
          component: {
            name: "Text",
            options: {
              text: "Card Content",
            },
          },
        },
      ],
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
  ],
});

Builder.registerComponent(Input, {
  name: "Tuxedo Input",
  inputs: [
    {
      name: "type",
      type: "enum",
      enum: ["text", "email", "password", "number", "tel", "url"],
      defaultValue: "text",
    },
    {
      name: "label",
      type: "string",
      defaultValue: "",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text...",
    },
    {
      name: "error",
      type: "string",
      defaultValue: "",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
    {
      name: "onChange",
      type: "action",
      defaultValue: "() => {}",
    },
  ],
});

Builder.registerComponent(Modal, {
  name: "Tuxedo Modal",
  inputs: [
    {
      name: "isOpen",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Modal Title",
    },
    {
      name: "size",
      type: "enum",
      enum: ["small", "medium", "large", "fullscreen"],
      defaultValue: "medium",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Modal Content",
    },
    {
      name: "onClose",
      type: "action",
      defaultValue: "() => {}",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
  ],
});

Builder.registerComponent(QuoteCard, {
  name: "Tuxedo Quote Card",
  inputs: [
    {
      name: "vehicleReg",
      type: "string",
      defaultValue: "ML18 UOE",
      helperText: "Vehicle registration number to display in the title",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Get breakdown quotes for {vehicleReg} in seconds",
      helperText:
        "Main title - use {vehicleReg} placeholder for dynamic replacement",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Choose from local, nationwide or European cover then see your prices",
      helperText: "Description text below the title",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Get instant quotes",
    },
    {
      name: "showIcon",
      type: "boolean",
      defaultValue: true,
      helperText: "Show the motor breakdown icon",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      helperText: "Disable the button interaction",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
    {
      name: "onButtonClick",
      type: "action",
      defaultValue: "() => {}",
    },
  ],
});

// Register HeroSection component with dynamic inputs
Builder.registerComponent(HeroSection, {
  name: "Hero Section",
  inputs: [
    {
      name: "badgeText",
      type: "string",
      defaultValue: "✨ New Collection Available",
    },
    {
      name: "badgeVariant",
      type: "enum",
      enum: ["primary", "secondary", "success", "warning", "danger", "info"],
      defaultValue: "secondary",
    },
    {
      name: "personName",
      type: "string",
      defaultValue: "",
      helperText: "Optional name to display above the main heading.",
    },
    {
      name: "mainHeading",
      type: "string",
      defaultValue: "Compare & Save",
    },
    {
      name: "gradientText",
      type: "string",
      defaultValue: "On Everything",
    },
    {
      name: "subHeading",
      type: "string",
      defaultValue: "You Need",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "From insurance to energy, mobiles to mortgages. Find the best deals and compare prices to save money on all your essentials.",
    },
    {
      name: "primaryButtonText",
      type: "string",
      defaultValue: "Shop Collection",
    },
    {
      name: "primaryButtonVariant",
      type: "enum",
      enum: ["primary", "secondary", "outline", "ghost", "danger"],
      defaultValue: "secondary",
    },
    {
      name: "primaryButtonSize",
      type: "enum",
      enum: ["small", "medium", "large"],
      defaultValue: "large",
    },
    {
      name: "secondaryButtonText",
      type: "string",
      defaultValue: "Watch Story",
    },
    {
      name: "secondaryButtonVariant",
      type: "enum",
      enum: ["primary", "secondary", "outline", "ghost", "danger"],
      defaultValue: "outline",
    },
    {
      name: "secondaryButtonSize",
      type: "enum",
      enum: ["small", "medium", "large"],
      defaultValue: "large",
    },
    {
      name: "showStats",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "stat1Value",
      type: "string",
      defaultValue: "50K+",
    },
    {
      name: "stat1Label",
      type: "string",
      defaultValue: "Happy Customers",
    },
    {
      name: "stat2Value",
      type: "string",
      defaultValue: "1000+",
    },
    {
      name: "stat2Label",
      type: "string",
      defaultValue: "Premium Products",
    },
    {
      name: "stat3Value",
      type: "string",
      defaultValue: "98%",
    },
    {
      name: "stat3Label",
      type: "string",
      defaultValue: "Satisfaction Rate",
    },
    {
      name: "showScrollIndicator",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "backgroundGradient",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "animatedBackground",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
    {
      name: "onPrimaryButtonClick",
      type: "action",
      defaultValue: "() => {}",
    },
    {
      name: "onSecondaryButtonClick",
      type: "action",
      defaultValue: "() => {}",
    },
    {
      name: "statLabelsLight",
      type: "boolean",
      defaultValue: true,
      helperText: "Use light font color for stat labels (for dark backgrounds)",
    },
  ],
});

// Register NewsLetterCTA component with dynamic inputs
Builder.registerComponent(NewsLetterCTA, {
  name: "Newsletter CTA",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Stay Updated",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Get the latest deals, comparison guides, and money-saving tips delivered straight to your inbox.",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter your email",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Subscribe",
    },
    {
      name: "buttonVariant",
      type: "enum",
      enum: ["primary", "secondary", "outline", "ghost", "danger"],
      defaultValue: "primary",
    },
    {
      name: "disclaimer",
      type: "string",
      defaultValue: "Join millions of savvy shoppers. Unsubscribe anytime.",
    },
    {
      name: "backgroundGradient",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
    {
      name: "onSubmit",
      type: "action",
      defaultValue: '(email) => console.log("Newsletter subscription:", email)',
    },
  ],
});

// Register FeatureCard component
Builder.registerComponent(FeatureCard, {
  name: "Feature Card",
  inputs: [
    {
      name: "image",
      type: "string",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fexample-icon.png",
      helperText: "Image URL or icon URL",
    },
    {
      name: "headline",
      type: "string",
      defaultValue: "Feature Title",
    },
    {
      name: "detail",
      type: "string",
      defaultValue: "Feature description goes here.",
    },
  ],
});

// Register FeaturesSection component
Builder.registerComponent(FeaturesSection, {
  name: "Features Section",
  inputs: [
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [
        {
          "@type": "@builder.io/sdk:Element",
          component: {
            name: "Text",
            options: {
              text: "Feature Card Content",
            },
          },
        },
      ],
    },
  ],
});

Builder.registerComponent(WelcomeBanner, {
  name: "Welcome Banner",
});
