
import React from "react";
import BlurredCard from "./ui/BlurredCard";
import { Activity, BookOpen, Calendar, FileText, Beaker, Search, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Beaker className="w-6 h-6 text-cyber-blue" />,
    title: "Clinical Trial Data Analysis",
    description: "Advanced data analysis and statistical modeling to identify trends, side effects, and effectiveness of pharmaceutical compounds."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyber-purple" />,
    title: "Literature Review Assistant",
    description: "Comprehensive literature reviews extracting key findings from scientific articles, journals, and databases."
  },
  {
    icon: <Activity className="w-6 h-6 text-cyber-pink" />,
    title: "Drug Interaction Predictor",
    description: "AI-based simulations to predict potential drug interactions and contraindications, identifying risks and suitable combinations."
  },
  {
    icon: <Shield className="w-6 h-6 text-cyber-green" />,
    title: "Regulatory Compliance Advisor",
    description: "Track regulatory requirements and analyze documents to ensure compliance with FDA and other regulatory bodies."
  },
  {
    icon: <Users className="w-6 h-6 text-cyber-yellow" />,
    title: "Participant Recruitment Optimizer",
    description: "Optimize clinical trial recruitment by analyzing demographic data and identifying suitable candidates."
  },
  {
    icon: <FileText className="w-6 h-6 text-cyber-red" />,
    title: "Patent Research Assistant",
    description: "Patent database search and document creation for research and drafting patent applications."
  },
  {
    icon: <Search className="w-6 h-6 text-cyber-blue" />,
    title: "Pill Identification",
    description: "Identify pills through images or descriptions, ensuring accurate medication identification."
  },
  {
    icon: <Calendar className="w-6 h-6 text-cyber-purple" />,
    title: "Medication Scheduling",
    description: "Create exportable calendars and set up personalized medication schedules with timely reminders."
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyber-blue/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-cyber-blue/30 rounded-full bg-cyber-blue/10 backdrop-blur-sm">
            <span className="text-sm">Comprehensive Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for Pharmaceutical Excellence
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our AI-powered tools offer a wide range of capabilities to enhance pharmaceutical research, 
            clinical trials, and medication management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <BlurredCard 
              key={feature.title}
              className={`reveal ${index % 4 === 0 ? 'reveal-delay-1' : index % 4 === 1 ? 'reveal-delay-2' : index % 4 === 2 ? 'reveal-delay-3' : ''}`}
              hoverEffect
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </BlurredCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
