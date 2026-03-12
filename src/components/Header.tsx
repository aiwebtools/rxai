
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import GradientButton from "./ui/GradientButton";
import HeaderButton from "./ui/HeaderButton";
import { motion, AnimatePresence } from "framer-motion";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const currentSection = NAV_ITEMS.map(i => i.id).find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }) || "home";
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 backdrop-blur-xl bg-cyber-black/80 shadow-md' : 'py-3 sm:py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <span className="text-lg sm:text-xl font-bold text-gradient">Pharma Research AI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map(item => (
            <HeaderButton key={item.id} href={`#${item.id}`} active={activeSection === item.id}>
              {item.label}
            </HeaderButton>
          ))}
          <a
            href={AIWEBTOOLS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-2 font-medium text-sm transition-all duration-300 text-white/70 hover:text-white hover:shadow-[0_0_10px_rgba(14,165,233,0.3)] flex items-center gap-1"
          >
            More AI Tools <ExternalLink size={12} />
          </a>
          
          <GradientButton href="#contact" className="ml-4">
            Get Started
          </GradientButton>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 -mr-2 touch-manipulation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-cyber-black/95 border-t border-white/10 shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-3 flex flex-col">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-3 px-4 rounded-lg transition-colors touch-manipulation text-base ${
                    activeSection === item.id ? 'text-white bg-white/10' : 'text-white/80 hover:bg-white/5'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={AIWEBTOOLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg transition-colors touch-manipulation text-base text-white/80 hover:bg-white/5 flex items-center gap-2"
                onClick={closeMenu}
              >
                More AI Tools <ExternalLink size={14} />
              </a>
              <a
                href="#contact"
                className="mt-3 py-3 text-center bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium touch-manipulation"
                onClick={closeMenu}
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
