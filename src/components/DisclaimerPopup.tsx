
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimer-accepted");
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage so it doesn't show again
    localStorage.setItem("disclaimer-accepted", "true");
    setIsOpen(false);
    
    // Show confirmation toast
    toast({
      title: "Welcome to Pharma Research AI",
      description: "Thank you for accepting our disclaimer.",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-lg w-full rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-magenta/20 opacity-70 z-0"></div>
            
            <div className="relative z-10 glass-card p-6 md:p-8 border-2 border-white/10">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center mb-6">
                <div className="bg-cyber-blue/20 p-2 rounded-full mr-3">
                  <ShieldCheck className="h-6 w-6 text-cyber-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                  Important Disclaimer
                </h2>
              </div>
              
              <div className="space-y-4 mb-6 font-medium">
                <p className="text-white/90">
                  Pharma Research AI is designed to assist pharmaceutical professionals but is not a substitute for professional medical or pharmaceutical advice, diagnosis, or treatment.
                </p>
                <p className="text-white/80">
                  The information provided is for research purposes only. Users should independently verify all information before making medical or pharmaceutical decisions.
                </p>
                <p className="text-white/80">
                  By clicking "I AGREE" below, you acknowledge that you have read and understood this disclaimer.
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handleAgree}
                  className="relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple font-bold text-white shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span>I AGREE</span>
                    <span className="ml-2 group-hover:rotate-45 transition-transform duration-300">→</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
