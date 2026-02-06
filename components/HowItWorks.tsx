"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-it-works py-20 bg-gradient-to-br from-blue-50 to-cyan-50" aria-labelledby="how-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">How it works</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="how-title" className="text-4xl font-bold text-gray-900 mb-4">Medical help in 3 steps</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fast, private, and professional medical assistance.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TextReveal delay={300}>
            <div className="bg-white p-10 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">01</div>
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Share your concern</h3>
              <p className="text-gray-600">Voice message or text in Kurdish, Arabic, or English. Send photos if needed.</p>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-white p-10 rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:scale-105 text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">02</div>
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get AI insights</h3>
              <p className="text-gray-600">Instant symptom analysis, medication info, or medical education support.</p>
            </div>
          </TextReveal>

          <TextReveal delay={900}>
            <div className="bg-white p-10 rounded-2xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-105 text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">03</div>
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consult your doctor</h3>
              <p className="text-gray-600">Use insights to ask better questions. NUVA guides, doctors decide.</p>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
