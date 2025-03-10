
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
}

const HeaderButton = ({ children, className, active, ...props }: HeaderButtonProps) => {
  return (
    <a
      className={cn(
        "relative px-4 py-2 font-medium text-sm transition-all duration-300",
        "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-cyber-blue before:to-cyber-purple",
        "before:transition-all before:duration-300 hover:before:w-full",
        "hover:text-white hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]",
        active ? "text-white before:w-full" : "text-white/70",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default HeaderButton;
