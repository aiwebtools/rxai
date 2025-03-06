
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Activity } from "lucide-react";

const Index = () => {
  // Reference for scroll animation
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal animation
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      {/* Favicon */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💊</text></svg>"
      />
      
      {/* Fixed elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 bg-cyber-black"></div>
      
      {/* Main Content */}
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Product Showcase */}
        <section className="py-20 relative overflow-hidden bg-cyber-darkblue/40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16 reveal">
              <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-cyber-blue/30 rounded-full bg-cyber-blue/10 backdrop-blur-sm">
                <Activity className="w-4 h-4 mr-2 text-cyber-blue" />
                <span className="text-sm">Our Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful AI Tools for Pharmaceutical Excellence
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Explore our specialized AI solutions designed to transform pharmaceutical research and medication management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 reveal reveal-delay-1">
                <div className="relative p-1.5 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple">
                  <div className="absolute -left-3 -top-3 w-16 h-16 rounded-full bg-cyber-purple/30 blur-[30px]"></div>
                  <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full bg-cyber-blue/30 blur-[30px]"></div>
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                    alt="Pharma Research Pro" 
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2 reveal reveal-delay-2">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Pharma Research Pro</h3>
                <p className="text-muted-foreground mb-6">
                  A comprehensive AI solution for pharmaceutical research and clinical trials. Featuring advanced data analysis, 
                  literature reviews, and predictive insights, Pharma Research Pro is designed to accelerate drug development 
                  and optimize clinical trial processes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-cyber-blue/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Clinical trial data analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-cyber-blue/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Pharmaceutical literature review assistant</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-cyber-blue/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Regulatory compliance advisor</span>
                  </li>
                </ul>
                <a 
                  href="https://chatgpt.com/g/g-GKBqblkrz-pharma-research-pro" 
                  className="inline-flex items-center text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  Try Pharma Research Pro
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="h-16 md:h-32"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="reveal reveal-delay-1">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Pharmaceutical Assistant GPT</h3>
                <p className="text-muted-foreground mb-6">
                  A specialized AI assistant for medication management and scheduling. With features like personalized medication 
                  schedules, interaction checks, and pill identification, Pharmaceutical Assistant GPT helps healthcare professionals 
                  and patients optimize medication regimens.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-cyber-purple/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Medication scheduling and reminders</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-cyber-purple/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Medication interaction checks</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-cyber-purple/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Pill identification via images</span>
                  </li>
                </ul>
                <a 
                  href="https://chatgpt.com/g/g-ZLpVaDzjI-pharmaceutical-assistant-gpt" 
                  className="inline-flex items-center text-cyber-purple hover:text-cyber-blue transition-colors"
                >
                  Try Pharmaceutical Assistant GPT
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <div className="reveal reveal-delay-2">
                <div className="relative p-1.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-magenta">
                  <div className="absolute -left-3 -top-3 w-16 h-16 rounded-full bg-cyber-magenta/30 blur-[30px]"></div>
                  <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full bg-cyber-purple/30 blur-[30px]"></div>
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                    alt="Pharmaceutical Assistant GPT" 
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeatureSection />
        <HowItWorks />
        <TestimonialSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
