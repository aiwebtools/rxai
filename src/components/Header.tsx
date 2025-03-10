
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GradientButton from "./ui/GradientButton";
import HeaderButton from "./ui/HeaderButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ["home", "features", "how-it-works", "testimonials", "faq"];
      
      // Find the current section based on scroll position
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }) || "home";
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 backdrop-blur-xl bg-cyber-black/80 shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className="text-xl font-bold text-gradient">Pharma Research AI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <HeaderButton href="#home" active={activeSection === "home"}>
            Home
          </HeaderButton>
          <HeaderButton href="#features" active={activeSection === "features"}>
            Features
          </HeaderButton>
          <HeaderButton href="#how-it-works" active={activeSection === "how-it-works"}>
            How It Works
          </HeaderButton>
          <HeaderButton href="#testimonials" active={activeSection === "testimonials"}>
            Testimonials
          </HeaderButton>
          <HeaderButton href="#faq" active={activeSection === "faq"}>
            FAQ
          </HeaderButton>
          
          <GradientButton href="#contact" className="ml-4">
            Get Started
          </GradientButton>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-cyber-black/90 border-t border-white/10 shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col">
            <a href="#home" className="py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#features" className="py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" className="py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="mt-3 py-3 text-center bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg" onClick={() => setIsMenuOpen(false)}>Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
