import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Button from "./Button";

export interface TuxedoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "small" | "medium" | "large" | "fullscreen";
  testId?: string;
  children: React.ReactNode;
}

const Modal: React.FC<TuxedoModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "medium",
  testId,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      data-testid={testId}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={cn(
          // Base styles matching Confused.com design
          "relative bg-white border border-gray-200 text-brand-primary-dark shadow-2xl",
          "max-h-[90vh] overflow-hidden flex flex-col",

          // Size variants
          {
            "w-full max-w-sm": size === "small",
            "w-full max-w-md": size === "medium",
            "w-full max-w-2xl": size === "large",
            "w-full h-full max-w-none max-h-none": size === "fullscreen",
          },
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-brand-primary-dark">
              {title}
            </h2>
            <Button
              variant="ghost"
              size="small"
              onClick={onClose}
              className="p-1 h-auto hover:bg-brand-primary-gray"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
};

Modal.displayName = "TuxedoModal";

export default Modal;
