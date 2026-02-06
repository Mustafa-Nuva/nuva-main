"use client";

import { useState, useRef, useEffect } from "react";
import AnimatedIcon from "./AnimatedIcon";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  delay?: number;
}

function FeatureCard({ icon, title, description, details, delay = 0 }: FeatureProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      }`}
    >
      <div 
        className={`bg-white p-8 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:border-blue-300 hover:scale-105 ${
          isExpanded ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <AnimatedIcon delay={delay + 200}>
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
            {icon}
          </div>
        </AnimatedIcon>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-gray-100">
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <span className="text-blue-600 font-medium">
            {isExpanded ? 'Show Less' : 'Learn More'}
          </span>
          <svg 
            className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveFeatures() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze symptoms and medical data to provide accurate diagnostic suggestions.",
      details: [
        "Pattern recognition from thousands of medical cases",
        "Real-time symptom analysis and correlation",
        "Integration with medical databases and research",
        "Continuous learning from healthcare outcomes"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Multilingual Support",
      description: "Communicate in Kurdish, Arabic, and English with natural language processing tailored for medical terminology.",
      details: [
        "Native Kurdish language processing",
        "Medical terminology in all three languages",
        "Cultural context awareness",
        "Voice recognition and text-to-speech"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Privacy & Security",
      description: "Bank-level encryption and HIPAA-compliant data handling ensure your medical information stays confidential.",
      details: [
        "End-to-end encryption for all communications",
        "HIPAA and GDPR compliant data handling",
        "Local data processing when possible",
        "Regular security audits and updates"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </AnimatedIcon>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on each feature to discover how NUVA revolutionizes healthcare in Kurdistan
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
