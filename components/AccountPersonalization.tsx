"use client";

import TextReveal from "./TextReveal";
import AnimatedIcon from "./AnimatedIcon";

export default function AccountPersonalization() {
  return (
    <section id="account" className="section account-personalization py-20 bg-white" aria-labelledby="account-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon>
            <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </AnimatedIcon>
          <TextReveal>
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wide mb-4">Your NUVA Experience</p>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 id="account-title" className="text-4xl font-bold text-gray-900 mb-4">Personalized medical assistance</h2>
          </TextReveal>
          <TextReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Create an account to customize your experience and access NUVA across devices.</p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TextReveal delay={200}>
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 hover:border-sky-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User profiles</h3>
              <p className="text-gray-600">Save preferences and access from any device. NUVA provides relevant info based on your role and preferences.</p>
            </div>
          </TextReveal>

          <TextReveal delay={400}>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Language preference</h3>
              <p className="text-gray-600">Set your preferred language — Kurdish, Arabic, or English. NUVA remembers your choice across sessions.</p>
            </div>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversation history</h3>
              <p className="text-gray-600">Optionally save conversations. Entirely optional, can be disabled anytime. You control what's saved.</p>
            </div>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="bg-violet-50 p-8 rounded-2xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized experience</h3>
              <p className="text-gray-600">NUVA adapts to your needs — students see educational content, patients get symptom guidance and health literacy.</p>
            </div>
          </TextReveal>

          <TextReveal delay={1000}>
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy controls</h3>
              <p className="text-gray-600">Full control over your data. Choose what to save, share, and delete. Export or delete account data anytime.</p>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={1200}>
          <div className="bg-sky-100 p-6 rounded-2xl text-center border border-sky-200">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-sky-800 font-medium">Account creation is optional. You can use NUVA without an account, though some features like conversation history and cross-device access require a profile.</p>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
