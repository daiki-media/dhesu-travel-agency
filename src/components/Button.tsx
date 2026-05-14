import React from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "light" | "dark" | "transparent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  showArrow?: boolean;
  arrowPosition?: "right" | "left";
  fullWidth?: boolean;
}

export default function Button({
  variant = "light",
  size = "md",
  children,
  className = "",
  showArrow = false,
  arrowPosition = "right",
  fullWidth = false,
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-[15px]",
    lg: "px-10 py-4 text-base",
  };

  // Variant classes (using your existing CSS classes + additional)
  const variantClasses = {
    light: "btn-base btn-light",
    dark: "btn-base btn-dark",
    transparent: "btn-transparent",
  };

  // Arrow size based on button size
  const arrowSize = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 
        font-semibold rounded-full 
        transition-all duration-300 
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      <span className="btn-content flex items-center gap-2">
        {showArrow && arrowPosition === "left" && (
          <ArrowRight size={arrowSize[size]} className="rotate-180 transition-transform group-hover:translate-x-1" />
        )}
        {children}
        {showArrow && arrowPosition === "right" && (
          <ArrowRight size={arrowSize[size]} className="transition-transform group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
}

// // Light variant (primary color)
// <Button variant="light" showArrow size="lg">
//   Explore Tours
// </Button>
// 
// // Dark variant (title color)
// <Button variant="dark" showArrow>
//   Learn More
// </Button>
// 
// // Transparent variant with white border
// <Button variant="transparent" showArrow size="lg">
//   Our Services
// </Button>
// 
// // Without arrow
// <Button variant="light" size="sm">
//   Submit
// </Button>
// 
// // Full width button
// <Button variant="dark" fullWidth showArrow>
//   Book Now
// </Button>
// 
// // Custom className
// <Button variant="transparent" className="mt-4 shadow-lg" showArrow>
//   Get Started
// </Button>
// 
// // Left arrow
// <Button variant="light" showArrow arrowPosition="left" size="lg">
//   Go Back
// </Button>