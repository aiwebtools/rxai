import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Mail, Phone, Activity } from "lucide-react";
import GradientButton from "./ui/GradientButton";

const footerLinks = [
  { name: "Pharmaceutical Assistant GPT", href: "https://chatgpt.com/g/g-ZLpVaDzjI-pharmaceutical-assistant-gpt" },
  { name: "Pharma Research Pro", href: "https://chatgpt.com/g/g-GKBqblkrz-pharma-research-pro" },
  { name: "FAQ", href: "#faq" },
  { name: "Disclaimer", href: "#disclaimer" },
];

const Footer = () => {
  return (
    <footer className="bg-cyber-darkblue/80 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-10">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="relative inline-block h-10 w-10 overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-cyber-blue" />
                </span>
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none">RxAi</span>
                <span className="text-xs text-cyber-blue/80">
                  Presented by <a href="https://www.aiwebtools.ai" className="hover:text-cyber-blue transition-colors">AiWebTools.Ai</a>
                </span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground mt-4 mb-6">
              Advanced AI solutions for pharmaceutical research and medication management.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:4758008096"
                className="flex items-center gap-2 text-sm hover:text-cyber-blue transition-colors"
              >
                <Phone size={16} className="text-cyber-blue" />
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center gap-2 text-sm hover:text-cyber-blue transition-colors"
              >
                <Mail size={16} className="text-cyber-blue" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <GradientButton
              href="https://www.aiwebtools.ai"
              variant="secondary"
              className="rounded-full flex items-center gap-2 mb-6"
            >
              More AI Tools <ExternalLink size={16} />
            </GradientButton>
            <p className="text-sm text-muted-foreground">
              Discover our full suite of AI-powered tools designed to revolutionize your workflow.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            <a href="https://www.aiwebtools.ai" className="hover:text-cyber-blue">
              © 2025 AI WEB TOOLS LLC
            </a> All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
