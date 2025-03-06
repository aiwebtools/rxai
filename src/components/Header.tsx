
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import GradientButton from "./ui/GradientButton";
import { RxActivityLog } from "react-icons/rx";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Pharmaceutical Assistant GPT", href: "https://chatgpt.com/g/g-ZLpVaDzjI-pharmaceutical-assistant-gpt" },
  { name: "Pharma Research Pro", href: "https://chatgpt.com/g/g-GKBqblkrz-pharma-research-pro" },
  { name: "FAQ", href: "#faq" },
  { name: "Disclaimer", href: "#disclaimer" },
  { name: "More AI Tools", href: "https://www.aiwebtools.ai" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
        isScrolled ? "bg-cyber-black/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="relative inline-block h-10 w-10 overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center">
                <RxActivityLog className="h-8 w-8 text-cyber-blue animate-pulse-glow" />
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white leading-none">RxAi</span>
              <span className="text-xs text-cyber-blue/80">
                Presented by <a href="https://www.aiwebtools.ai" className="hover:text-cyber-blue transition-colors">AiWebTools.Ai</a>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm rounded-md transition-colors hover:text-cyber-blue hover:bg-cyber-blue/10"
              >
                {link.name}
              </a>
            ))}
            <GradientButton
              href="https://chatgpt.com/g/g-GKBqblkrz-pharma-research-pro"
              size="sm"
              className="ml-2"
            >
              Try Now
            </GradientButton>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyber-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 mt-4 flex flex-col space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm rounded-md transition-colors hover:text-cyber-blue hover:bg-cyber-blue/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <GradientButton
              href="https://chatgpt.com/g/g-GKBqblkrz-pharma-research-pro"
              size="sm"
              className="mt-2"
            >
              Try Now
            </GradientButton>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
