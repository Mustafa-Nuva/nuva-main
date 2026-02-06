"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function Features() {
  return (
    <section id="features" className="section features py-20 bg-white" aria-labelledby="features-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-wide mb-4">Why NUVA</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="features-title" className="text-4xl font-bold text-gray-900 mb-4">Medical AI built for Kurdistan</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kurdish voice support. Medical-grade privacy. Multilingual capabilities.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TextReveal delay={300}>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kurdish Voice Support</h3>
              <p className="text-gray-600 mb-4">Speak naturally in Kurdish, Arabic, or English. First medical AI in Kurdistan with native voice recognition.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Kurdish voice messages</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>3 languages supported</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Natural conversation</li>
              </ul>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Assistance</h3>
              <p className="text-gray-600 mb-4">For doctors, pharmacists, patients & students. Symptom analysis, medication info, and education support.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Symptom checker</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Medication guidance</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Medical education</li>
              </ul>
            </div>
          </TextReveal>

          <TextReveal delay={900}>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Privacy</h3>
              <p className="text-gray-600 mb-4">Your data stays secure. Voice and photos are never stored. Complete patient confidentiality.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Zero data storage</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>No photo retention</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>HIPAA-level security</li>
              </ul>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
