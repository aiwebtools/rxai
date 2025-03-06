
import { cn } from "@/lib/utils";
import React from "react";

interface BlurredCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: "blue" | "purple" | "pink" | "none";
  hoverEffect?: boolean;
}

const BlurredCard = ({ 
  children, 
  className, 
  glowColor = "blue",
  hoverEffect = false,
  ...props 
}: BlurredCardProps) => {
  const glowStyles = {
    blue: "before:bg-cyber-blue/20",
    purple: "before:bg-cyber-purple/20",
    pink: "before:bg-cyber-pink/20",
    none: ""
  };

  return (
    <div
      className={cn(
        "relative glass-card rounded-xl p-6 overflow-hidden transition-all duration-300",
        hoverEffect && "hover:-translate-y-1 hover:shadow-[0_8px_30px_-5px_rgba(14,165,233,0.3)]",
        glowColor !== "none" && "before:absolute before:w-1/2 before:h-1/2 before:rounded-full before:blur-[100px] before:-z-10 before:top-0 before:left-0",
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurredCard;
