
import React from "react";
import BlurredCard from "./ui/BlurredCard";
import { Check, FileCheck, Search, Send } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-cyber-darkblue/50" id="how-it-works">
      <div className="absolute inset-0 bg-grid opacity-30 -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-cyber-blue/30 rounded-full bg-cyber-blue/10 backdrop-blur-sm">
            <span className="text-sm">Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Pharma Research AI Works
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our AI solutions are designed to be intuitive and powerful, seamlessly integrating into your pharmaceutical workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="relative pl-12 reveal reveal-delay-1">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                  <span className="text-cyber-blue font-medium">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your AI Tool</h3>
                <p className="text-muted-foreground">
                  Select either Pharma Research Pro for comprehensive research capabilities or Pharmaceutical Assistant GPT for medication management.
                </p>
              </div>
              
              <div className="relative pl-12 reveal reveal-delay-2">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                  <span className="text-cyber-blue font-medium">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Input Your Query or Data</h3>
                <p className="text-muted-foreground">
                  Provide specific details about your pharmaceutical research needs, clinical trial data, or medication management requirements.
                </p>
              </div>
              
              <div className="relative pl-12 reveal reveal-delay-3">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                  <span className="text-cyber-blue font-medium">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive Advanced Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI processes your input and generates comprehensive analysis, predictions, or personalized medication schedules.
                </p>
              </div>
              
              <div className="relative pl-12 reveal reveal-delay-4">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                  <span className="text-cyber-blue font-medium">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply Insights</h3>
                <p className="text-muted-foreground">
                  Implement the AI-generated insights into your pharmaceutical research, clinical trials, or medication management strategy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal">
            <BlurredCard className="p-0 overflow-hidden">
              <div className="bg-cyber-darkblue p-4 border-b border-white/5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-cyber-red mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-yellow mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                  <div className="ml-4 text-sm text-white/50">Pharma Research AI</div>
                </div>
              </div>
              
              <div className="p-6 bg-cyber-darkblue/50">
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Search className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div className="bg-cyber-blue/10 rounded-xl p-3 rounded-tl-none">
                    <p className="text-sm">Analyze the potential interactions between drug A and drug B for patients with hypertension.</p>
                  </div>
                </div>
                
                <div className="flex mb-4 justify-end">
                  <div className="bg-cyber-purple/10 rounded-xl p-3 rounded-tr-none max-w-xs">
                    <p className="text-sm">Analyzing potential interactions between Drug A and Drug B for hypertensive patients...</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center ml-3 flex-shrink-0">
                    <Send className="w-4 h-4 text-cyber-purple" />
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <FileCheck className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div className="bg-cyber-blue/10 rounded-xl p-3 rounded-tl-none">
                    <p className="text-sm">Can you generate a visual representation of these interactions?</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-cyber-purple/10 rounded-xl p-3 rounded-tr-none max-w-xs">
                    <p className="text-sm">Generating visualization of drug interactions. The analysis shows a moderate risk of combined hypotensive effect when used together.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center ml-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-cyber-purple" />
                  </div>
                </div>
              </div>
            </BlurredCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
