
import React from "react";
import BlurredCard from "./ui/BlurredCard";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="disclaimer">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyber-red/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-cyber-red/30 rounded-full bg-cyber-red/10 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4 mr-2 text-cyber-red" />
            <span className="text-sm">Important Information</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Legal Disclaimers
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Please review the following important information regarding the use of our AI tools.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 reveal">
          <BlurredCard>
            <h3 className="text-xl font-semibold mb-4">Not a Replacement for Professional Advice</h3>
            <p className="text-muted-foreground mb-4">
              Pharma Research Pro and Pharmaceutical Assistant GPT are AI tools designed to assist pharmaceutical professionals but are not substitutes for professional medical or pharmaceutical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.
            </p>
            <p className="text-muted-foreground">
              The information provided by these tools is for informational and research purposes only. Users should independently verify any information obtained from these tools before making medical or pharmaceutical decisions.
            </p>
          </BlurredCard>
          
          <BlurredCard>
            <h3 className="text-xl font-semibold mb-4">Accuracy Limitations</h3>
            <p className="text-muted-foreground mb-4">
              While we strive for accuracy, the information provided by our AI tools may not be complete, current, or error-free. Drug interactions, clinical data analysis, and other predictions should be verified through established pharmaceutical resources and professional judgment.
            </p>
            <p className="text-muted-foreground">
              These tools use machine learning algorithms that continuously evolve, but they have inherent limitations and may not account for all possible variables in pharmaceutical research or medication management.
            </p>
          </BlurredCard>
          
          <BlurredCard>
            <h3 className="text-xl font-semibold mb-4">Liability Limitation</h3>
            <p className="text-muted-foreground mb-4">
              AI Web Tools LLC and its affiliates disclaim all liability for any loss, damage, injury, or expense that might arise from the use of, or reliance upon, the services provided by Pharma Research Pro and Pharmaceutical Assistant GPT.
            </p>
            <p className="text-muted-foreground">
              By using these tools, you acknowledge and agree that AI Web Tools LLC is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use our services.
            </p>
          </BlurredCard>
          
          <BlurredCard>
            <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
            <p className="text-muted-foreground mb-4">
              Our AI tools are not FDA-approved medical devices and should not be used as the sole basis for clinical decision-making. Users are responsible for ensuring that their use of these tools complies with all applicable laws, regulations, and professional standards.
            </p>
            <p className="text-muted-foreground">
              The regulatory compliance information provided by these tools is subject to change and may not reflect the most current regulations. Users should independently verify regulatory information through official sources.
            </p>
          </BlurredCard>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
