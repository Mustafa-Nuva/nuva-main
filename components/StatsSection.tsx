"use client";

import AnimatedCounter from "./AnimatedCounter";
import AnimatedIcon from "./AnimatedIcon";

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedIcon delay={0}>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </AnimatedIcon>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Are Aiming For</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vision for NUVA's impact on Kurdistan's healthcare community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <AnimatedIcon delay={200}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m22 21-3-3m0 0-3-3m3 3-3 3m3-3 3 3" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </AnimatedIcon>
            <AnimatedCounter end={500} suffix="+" />
            <p className="text-gray-600 mt-2 font-medium">Healthcare Professionals</p>
          </div>

          <div className="text-center">
            <AnimatedIcon delay={400}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </AnimatedIcon>
            <AnimatedCounter end={10000} suffix="+" />
            <p className="text-gray-600 mt-2 font-medium">AI Consultations</p>
          </div>

          <div className="text-center">
            <AnimatedIcon delay={600}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </AnimatedIcon>
            <AnimatedCounter end={98} suffix="%" />
            <p className="text-gray-600 mt-2 font-medium">Accuracy Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
