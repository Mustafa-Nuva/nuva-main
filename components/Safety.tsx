"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function Safety() {
  return (
    <section id="safety" className="section safety py-20 bg-white" aria-labelledby="safety-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-4">Safety & Responsibility</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="safety-title" className="text-4xl font-bold text-gray-900 mb-4">Built with medical ethics at the core</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Patient safety and responsible AI use guide every decision we make.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TextReveal delay={200}>
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Does not replace doctors</h3>
              <p className="text-gray-600">NUVA assists and informs, never diagnoses or prescribes. Healthcare requires human judgment and the doctor-patient relationship.</p>
            </div>
          </TextReveal>

          <TextReveal delay={400}>
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="7" r="4" stroke="#f97316" strokeWidth="2"/><path d="M20 8v6m3-3h-6" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Doctors decide</h3>
              <p className="text-gray-600">All clinical decisions must be made by qualified, licensed healthcare professionals. NUVA supports, never replaces expertise.</p>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe understanding</h3>
              <p className="text-gray-600">Built with safeguards to provide accurate medical information while maintaining appropriate boundaries.</p>
            </div>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous monitoring</h3>
              <p className="text-gray-600">We continuously monitor performance and gather feedback from healthcare professionals to ensure safety and accuracy.</p>
            </div>
          </TextReveal>

          <TextReveal delay={1000}>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="#3b82f6" strokeWidth="2"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="#3b82f6" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full transparency</h3>
              <p className="text-gray-600">NUVA is transparent about what it can and cannot do, clearly communicating its limitations.</p>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={1200}>
          <div className="bg-red-600 text-white p-6 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <strong className="text-lg">Medical Emergency Notice</strong>
            </div>
            <p>NUVA is not for emergencies. If you are experiencing a medical emergency, call emergency services immediately or go to the nearest emergency room.</p>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
