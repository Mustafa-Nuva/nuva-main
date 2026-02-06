"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function FutureCapabilities() {
  return (
    <section id="future" className="section future-capabilities py-20 bg-gradient-to-br from-amber-50 to-orange-50" aria-labelledby="future-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-4">Future Development</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="future-title" className="text-4xl font-bold text-gray-900 mb-4">Built to grow responsibly</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">NUVA will evolve carefully, guided by medical ethics and user feedback.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TextReveal delay={200}>
            <div className="bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous improvement</h3>
              <p className="text-gray-600">NUVA will continue to improve through ongoing development, incorporating advances in medical knowledge and AI technology.</p>
            </div>
          </TextReveal>

          <TextReveal delay={400}>
            <div className="bg-white p-8 rounded-2xl border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback-driven</h3>
              <p className="text-gray-600">Healthcare professionals and users guide development. Priorities are based on real medical needs.</p>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-white p-8 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expanding carefully</h3>
              <p className="text-gray-600">New capabilities and medical specialties added gradually with careful attention to safety and accuracy.</p>
            </div>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="bg-white p-8 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare collaboration</h3>
              <p className="text-gray-600">Built in partnership with medical professionals in Kurdistan. Effective medical AI requires community input.</p>
            </div>
          </TextReveal>

          <TextReveal delay={1000}>
            <div className="bg-white p-8 rounded-2xl border border-red-100 hover:border-red-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical ethics first</h3>
              <p className="text-gray-600">Every new feature evaluated for impact on patient safety, medical practice, and healthcare outcomes.</p>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={1200}>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p className="text-lg font-medium">NUVA is designed for the long term — a medical AI platform serving Kurdistan's healthcare needs for years to come, growing thoughtfully with input from the medical community.</p>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
