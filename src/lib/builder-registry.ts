import { Builder } from "@builder.io/react";
import {
  Badge,
  Button,
  Card,
  Input,
  Modal,
  MotorBreakdownQuoteCard,
} from "../components/tuxedo";

// Register all Tuxedo components with Builder.io
Builder.registerComponent(Badge, {
  name: "Tuxedo Badge",
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["default", "secondary", "destructive", "outline"],
      defaultValue: "default",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Badge",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Tuxedo Button",
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "enum",
      enum: ["default", "sm", "lg", "icon"],
      defaultValue: "default",
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
  ],
});

Builder.registerComponent(Card, {
  name: "Tuxedo Card",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Card Content",
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
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text...",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
  ],
});

Builder.registerComponent(Modal, {
  name: "Tuxedo Modal",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Modal Title",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Modal description",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Modal Content",
    },
    {
      name: "isOpen",
      type: "boolean",
      defaultValue: false,
    },
  ],
});
