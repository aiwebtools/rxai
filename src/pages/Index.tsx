
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProductShowcase from "@/components/ProductShowcase";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimations();
  
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      
      {/* Fixed elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 bg-cyber-black"></div>
      
      {/* Main Content */}
      <Header />
      
      <main>
        <HeroSection />
        <ProductShowcase />
        <FeatureSection />
        <HowItWorks />
        <TestimonialSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
      
      {/* Disclaimer Popup */}
      <DisclaimerPopup />
    </div>
  );
};

export default Index;
