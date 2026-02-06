"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function UseCases() {
  return (
    <section id="use-cases" className="section use-cases py-20 bg-gradient-to-br from-slate-50 to-gray-100" aria-labelledby="use-cases-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-rose-500 font-semibold text-sm uppercase tracking-wide mb-4">How NUVA helps</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="use-cases-title" className="text-4xl font-bold text-gray-900 mb-4">Supporting healthcare across roles</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">NUVA provides assistance tailored to different needs, always supporting professional judgment.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <TextReveal delay={300}>
            <div className="bg-white p-8 rounded-2xl border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Patients</h3>
              </div>
              <p className="text-gray-600 mb-4">Understand symptoms and prepare for medical consultations with educational information about conditions and medications.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Symptom information and guidance</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Medication education and reminders</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Preparation for doctor visits</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Health literacy support</li>
              </ul>
              <p className="text-sm text-pink-600 bg-pink-50 p-3 rounded-lg">Always consult your doctor for diagnosis and treatment.</p>
            </div>
          </TextReveal>

          <TextReveal delay={500}>
            <div className="bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Doctors</h3>
              </div>
              <p className="text-gray-600 mb-4">Quick reference information, differential diagnosis support, and patient education materials as a clinical reference tool.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Clinical reference and guidelines</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Differential diagnosis support</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Drug interaction checking</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Patient education resources</li>
              </ul>
              <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">Clinical decisions remain with the physician.</p>
            </div>
          </TextReveal>

          <TextReveal delay={700}>
            <div className="bg-white p-8 rounded-2xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Pharmacists</h3>
              </div>
              <p className="text-gray-600 mb-4">Medication information, drug interactions, dosing guidance, and patient counseling support for pharmaceutical care.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Medication information and interactions</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Dosing and administration guidance</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Patient counseling support</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Pharmaceutical reference</li>
              </ul>
              <p className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">Pharmacist judgment is essential for pharmaceutical care.</p>
            </div>
          </TextReveal>

          <TextReveal delay={900}>
            <div className="bg-white p-8 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Medical Students</h3>
              </div>
              <p className="text-gray-600 mb-4">Educational resource offering medical concept explanations, case study support, and learning reinforcement.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Medical concept explanations</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Study and exam preparation</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Clinical reasoning practice</li>
                <li className="flex items-center gap-2 text-gray-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Medical terminology reference</li>
              </ul>
              <p className="text-sm text-purple-600 bg-purple-50 p-3 rounded-lg">Supports learning but does not replace medical education.</p>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
