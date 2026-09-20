import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-brand-600 hover:bg-brand-500 text-white shadow-sm hover:shadow-glow-sm border border-brand-400/30 active:scale-[0.98]",
      secondary:
        "bg-dark-800 hover:bg-dark-750 text-gray-100 border border-white/10 hover:border-white/20 active:scale-[0.98]",
      outline:
        "bg-transparent hover:bg-white/5 text-gray-200 border border-white/15 hover:border-brand-400/40 active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white border-transparent",
      whatsapp:
        "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm border border-emerald-400/30 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 rounded-lg font-medium gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl font-medium gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl font-semibold gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : (
          icon && iconPosition === "left" && <span>{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && <span>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
