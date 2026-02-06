import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function WhatIsNuva() {
  return (
    <section id="what-is-nuva" className="section what-is-nuva py-20 bg-gradient-to-br from-blue-50 to-indigo-50" aria-labelledby="what-is-nuva-title">
      <div className="container what-is-nuva-inner max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <TextReveal delay={0}>
            <p className="eyebrow text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">What is NUVA?</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="what-is-nuva-title" className="text-4xl font-bold text-gray-900 mb-6">Your AI medical assistant</h2>
          </TextReveal>
          <AnimatedIcon delay={400}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </AnimatedIcon>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <TextReveal delay={600}>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">A medical AI assistant</h3>
              <p className="text-gray-600">
                NUVA is an artificial intelligence system designed specifically for medical assistance. 
                It provides symptom guidance, medication information, and educational support to help 
                users understand health-related topics.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built for healthcare professionals and patients</h3>
              <p className="text-gray-600">
                NUVA serves doctors, pharmacists, patients, and medical students. It offers information 
                and guidance to support medical understanding, but it does not replace professional 
                medical judgment or clinical decision-making.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={1000}>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Not a replacement for healthcare professionals</h3>
              <p className="text-gray-600">
                NUVA is an assistant, not a doctor. It does not diagnose conditions, prescribe treatments, 
                or make medical decisions. All clinical decisions must be made by qualified healthcare 
                professionals. NUVA provides information to support, not replace, professional care.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={1200}>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Designed for responsible use</h3>
              <p className="text-gray-600">
                Every feature in NUVA is built with medical ethics and patient safety in mind. 
                The system is designed to provide helpful information while maintaining clear boundaries 
                about its role as a supportive tool, not a medical authority.
              </p>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
