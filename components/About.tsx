"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function About() {
  return (
    <section id="about" className="section about py-20 bg-gradient-to-br from-gray-900 to-slate-800" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedIcon>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </AnimatedIcon>
            <TextReveal>
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-4">About NUVA</p>
            </TextReveal>
            <TextReveal delay={200}>
              <h2 id="about-title" className="text-4xl font-bold text-white mb-6">Kurdistan's first medical AI.</h2>
            </TextReveal>
            <TextReveal delay={400}>
              <p className="text-gray-300 text-lg mb-4">
                Built for local healthcare. Kurdish voice support. Advanced AI technology designed for doctors, pharmacists, patients & students.
              </p>
            </TextReveal>
            <TextReveal delay={600}>
              <p className="text-gray-400 text-lg">
                Medical-grade privacy. Instant insights. Professional guidance. NUVA assists—your doctor decides.
              </p>
            </TextReveal>
          </div>

          <TextReveal delay={400} direction="left">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Designed for healthcare
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm font-medium">Users</p>
                    <p className="text-white">Doctors, pharmacists, patients, students</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p className="text-purple-300 text-sm font-medium">Features</p>
                    <p className="text-white">Voice messages, symptom analysis, education</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-sm font-medium">Languages</p>
                    <p className="text-white">Kurdish, Arabic, English</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">First in Kurdistan. Kurdish voice. Medical privacy.</p>
              </div>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
