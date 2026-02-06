"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'bot' | 'user', visible: boolean}>>([]);
  
  useEffect(() => {
    const chatSequence = [
      { text: "Hello, I'm NUVA, your medical AI assistant. How can I help you today?", sender: 'bot' as const, delay: 800 },
      { text: "I have a headache and fatigue. What could be causing this?", sender: 'user' as const, delay: 4000 },
      { text: "I can help analyze your symptoms. How long have you had these symptoms? Any fever or nausea?", sender: 'bot' as const, delay: 7500 }
    ];

    const timeouts: NodeJS.Timeout[] = [];
    
    chatSequence.forEach((msg) => {
      const timeout = setTimeout(() => {
        setMessages(prev => [...prev, { ...msg, visible: true }]);
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Meet <span className="gradient-text">NUVA</span> – Kurdistan's First Medical AI Assistant
            </h1>
            <p className="hero-subtitle">
              Medical AI designed to support healthcare professionals and patients with information and guidance. 
              NUVA assists—your doctor decides.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary">Try NUVA</a>
              <a href="#what-is-nuva" className="btn btn-secondary">How it works</a>
            </div>
          </div>
          <div className="hero-meta" aria-label="NUVA quick stats">
            <div className="meta-item">
              <span className="meta-label">Languages</span>
              <span className="meta-value">Kurdish, Arabic, English</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Designed for</span>
              <span className="meta-value">Medical professionals</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Privacy</span>
              <span className="meta-value">Medical‑grade security</span>
            </div>
          </div>
        </div>

        <div className="hero-panel" aria-label="NUVA live preview" data-animate="fade-left">
          <div className="glass-card hero-preview">
            <div className="preview-header">
              <span className="status-dot"></span>
              <span className="preview-title">NUVA conversation</span>
            </div>
            <div className="preview-body">
              {messages.map((msg, index) => (
                <div key={index} className={`message-row ${msg.sender} ${msg.visible ? 'message-fade-in' : ''}`}>
                  <div className="avatar">
                    {msg.sender === 'bot' ? (
                      <Image 
                        src="/images/alone-logo-d.png" 
                        alt="NUVA" 
                        width={24} 
                        height={24}
                        className="avatar-logo"
                      />
                    ) : (
                      'You'
                    )}
                  </div>
                  <div className="message typing-animation">
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="preview-footer">
              <div className="input-pill" aria-label="Chat input mockup">
                <span className="input-placeholder">Ask about symptoms, medications…</span>
                <span className="input-icon">↑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
