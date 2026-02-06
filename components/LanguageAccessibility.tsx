"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function LanguageAccessibility() {
  return (
    <section id="language" className="section language-accessibility py-20 bg-white" aria-labelledby="language-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-4">Language & Accessibility</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="language-title" className="text-4xl font-bold text-gray-900 mb-4">Medical assistance in your language</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Breaking language barriers in healthcare with Kurdish, Arabic, and English support.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TextReveal delay={200}>
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kurdish voice support</h3>
              <p className="text-gray-600">First medical AI in Kurdistan with Kurdish voice messages. Speak naturally and receive responses in your native language.</p>
            </div>
          </TextReveal>

          <TextReveal delay={400}>
            <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Three languages</h3>
              <p className="text-gray-600">Kurdish, Arabic, and English. Switch seamlessly between languages with the same level of accuracy.</p>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-cyan-50 p-8 rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural conversation</h3>
              <p className="text-gray-600">Communicate using everyday language, whether typing or speaking. No medical training needed.</p>
            </div>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility for all</h3>
              <p className="text-gray-600">Voice support for users who have difficulty typing or reading. Medical information for everyone in Kurdistan.</p>
            </div>
          </TextReveal>

          <TextReveal delay={1000}>
            <div className="bg-lime-50 p-8 rounded-2xl border border-lime-100 hover:border-lime-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural understanding</h3>
              <p className="text-gray-600">Designed with awareness of Kurdistan's healthcare context, regional terminology, and common health concerns.</p>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={1200}>
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-emerald-500 to-teal-500 p-8 rounded-2xl text-white text-center">
            <div>
              <p className="text-3xl font-bold mb-1">3</p>
              <p className="text-emerald-100 text-sm">Languages</p>
              <p className="text-white font-medium text-xs mt-1">Kurdish, Arabic, English</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">1st</p>
              <p className="text-emerald-100 text-sm">In Kurdistan</p>
              <p className="text-white font-medium text-xs mt-1">Kurdish voice AI</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">3</p>
              <p className="text-emerald-100 text-sm">Input Methods</p>
              <p className="text-white font-medium text-xs mt-1">Text, voice, images</p>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
