
import { cn } from "@/lib/utils";
import React from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

const GradientButton = ({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  target,
  rel,
  ...props
}: GradientButtonProps) => {
  const variantStyles = {
    primary: "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white border-none shadow-[0_8px_16px_-5px_rgba(14,165,233,0.5)]",
    secondary: "bg-gradient-to-r from-cyber-purple to-cyber-magenta text-white border-none shadow-[0_8px_16px_-5px_rgba(139,92,246,0.5)]",
    outline: "bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10"
  };

  const sizeStyles = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-2.5 px-6",
    lg: "text-lg py-3 px-8"
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "rounded-full inline-flex items-center justify-center font-medium transition-all duration-300",
        "hover:shadow-[0_8px_25px_-5px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default GradientButton;
