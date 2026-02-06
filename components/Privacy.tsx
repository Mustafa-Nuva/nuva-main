"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function Privacy() {
  return (
    <section id="privacy" className="section privacy py-20 bg-gradient-to-br from-indigo-50 to-purple-50" aria-labelledby="privacy-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-4">Privacy & Data Protection</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="privacy-title" className="text-4xl font-bold text-gray-900 mb-4">Your medical information stays private</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Patient confidentiality is a core principle, not an afterthought.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TextReveal delay={200}>
            <div className="bg-white p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No voice storage</h3>
              <p className="text-gray-600">Voice messages are processed in real-time and immediately discarded. Never saved to any database.</p>
            </div>
          </TextReveal>

          <TextReveal delay={400}>
            <div className="bg-white p-8 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No photo retention</h3>
              <p className="text-gray-600">Uploaded photos are processed immediately and permanently deleted. No visual data is ever retained.</p>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-white p-8 rounded-2xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient confidentiality</h3>
              <p className="text-gray-600">Medical privacy is not negotiable. Designed with confidentiality as a core architectural principle.</p>
            </div>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical-grade security</h3>
              <p className="text-gray-600">Encryption and security practices designed for healthcare. All data transmission is fully encrypted.</p>
            </div>
          </TextReveal>

          <TextReveal delay={1000}>
            <div className="bg-white p-8 rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Minimal data collection</h3>
              <p className="text-gray-600">We collect only what's necessary. No selling data, no third-party sharing. Your health information is yours.</p>
            </div>
          </TextReveal>

          <TextReveal delay={1200}>
            <div className="bg-white p-8 rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent practices</h3>
              <p className="text-gray-600">Clear about what we collect, how we use it, and how long we keep it. Request deletion anytime.</p>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
