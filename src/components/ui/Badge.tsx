import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "outline" | "accent";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-dark-800 text-gray-300 border-white/10",
    primary: "bg-brand-500/10 text-brand-400 border-brand-500/20",
    secondary: "bg-dark-750 text-gray-300 border-white/5",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    outline: "bg-transparent text-gray-300 border-white/10",
    accent: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium rounded-md",
    md: "text-sm px-3 py-1 font-medium rounded-lg",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border tracking-wide transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
