
import React from "react";
import BlurredCard from "./ui/BlurredCard";
import GradientButton from "./ui/GradientButton";
import { ArrowRight, Pill, Search, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="absolute inset-0 bg-radial -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyber-blue/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyber-purple/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-cyber-blue/30 rounded-full bg-cyber-blue/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-cyber-blue" />
            <span className="text-sm">Next-Generation Pharmaceutical AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-glow">
            <span className="text-gradient">Pharma Research AI</span>
            <br />Advanced Pharmaceutical Intelligence
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Revolutionize pharmaceutical research and medication management with AI-powered tools designed for precision, efficiency, and safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton
              href="https://chatgpt.com/g/g-GKBqblkrz-pharma-research-pro"
              size="lg"
              className="flex items-center gap-2"
            >
              Try Pharma Research Pro <ArrowRight className="w-4 h-4" />
            </GradientButton>
            <GradientButton
              href="https://chatgpt.com/g/g-ZLpVaDzjI-pharmaceutical-assistant-gpt"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              Pharmaceutical Assistant GPT
            </GradientButton>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <BlurredCard 
            className="flex flex-col items-center text-center p-8 reveal reveal-delay-1"
            glowColor="blue"
            hoverEffect
          >
            <div className="w-14 h-14 rounded-full bg-cyber-blue/20 flex items-center justify-center mb-6">
              <Search className="w-7 h-7 text-cyber-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Data Analysis</h3>
            <p className="text-muted-foreground">
              Analyze clinical trial data with precision, extracting valuable insights and identifying trends.
            </p>
          </BlurredCard>
          
          <BlurredCard 
            className="flex flex-col items-center text-center p-8 reveal reveal-delay-2"
            glowColor="purple"
            hoverEffect
          >
            <div className="w-14 h-14 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-6">
              <Pill className="w-7 h-7 text-cyber-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Medication Management</h3>
            <p className="text-muted-foreground">
              Organize and manage medication schedules with personalized reminders and interaction checks.
            </p>
          </BlurredCard>
          
          <BlurredCard 
            className="flex flex-col items-center text-center p-8 reveal reveal-delay-3"
            glowColor="pink"
            hoverEffect
          >
            <div className="w-14 h-14 rounded-full bg-cyber-pink/20 flex items-center justify-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-7 h-7 text-cyber-pink"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive Insights</h3>
            <p className="text-muted-foreground">
              Leverage AI simulations to predict drug interactions and optimize clinical trial designs.
            </p>
          </BlurredCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
