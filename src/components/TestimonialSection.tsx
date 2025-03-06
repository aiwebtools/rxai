
import React from "react";
import { cn } from "@/lib/utils";
import BlurredCard from "./ui/BlurredCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Pharma Research Pro has transformed our clinical trial analysis process. The AI's ability to identify patterns in large datasets has accelerated our research significantly.",
    author: "Dr. Sarah Chen",
    role: "Clinical Research Director",
    rating: 5
  },
  {
    id: 2,
    content: "The medication management features in Pharmaceutical Assistant GPT have been invaluable for our patients. The scheduling and interaction checks have improved medication adherence.",
    author: "James Wilson, PharmD",
    role: "Chief Pharmacist",
    rating: 5
  },
  {
    id: 3,
    content: "As a researcher, I've found the literature review capabilities to be exceptional. It saves hours of manual searches and provides comprehensive summaries.",
    author: "Dr. Michael Thompson",
    role: "Pharmaceutical Researcher",
    rating: 4
  },
  {
    id: 4,
    content: "The regulatory compliance advisor has been crucial in ensuring our research meets FDA requirements. The AI keeps us updated on changing regulations.",
    author: "Emily Rodriguez",
    role: "Regulatory Affairs Specialist",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyber-purple/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-cyber-purple/30 rounded-full bg-cyber-purple/10 backdrop-blur-sm">
            <span className="text-sm">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Pharmaceutical Professionals
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Hear from researchers, pharmacists, and healthcare professionals who have transformed their work with our AI tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <BlurredCard 
              key={testimonial.id}
              className={cn(
                "reveal",
                index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"
              )}
              glowColor={index % 2 === 0 ? "blue" : "purple"}
              hoverEffect
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyber-yellow text-cyber-yellow" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-4 h-4 text-muted-foreground" />
                ))}
              </div>
              
              <blockquote className="mb-6 text-lg">"{testimonial.content}"</blockquote>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </BlurredCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
