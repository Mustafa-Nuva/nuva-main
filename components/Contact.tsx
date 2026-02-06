"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("admin@nuva.krd");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="py-20 bg-gray-50" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">Get in Touch</p>
          <h2 id="contact-title" className="text-4xl font-bold text-gray-900 mb-6">Contact NUVA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about NUVA? Need support or want to learn more about our medical AI assistant? 
            We're here to help healthcare professionals, patients, and medical students in Kurdistan.
          </p>
        </div>
          
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:border-gray-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">Get in touch with our team</p>
            <div className="space-y-3">
              <a href="mailto:admin@nuva.krd" className="text-blue-600 hover:text-blue-800 font-medium block">admin@nuva.krd</a>
              <button 
                onClick={copyEmail}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:border-gray-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2"/>
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Instagram</h3>
            <p className="text-gray-600 mb-4">Stay updated with the latest news and developments</p>
            <a href="https://www.instagram.com/nuva.krd?igsh=Z2NsaHR5eHptOGZ5" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">@nuva.krd</a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-600">NUVA</strong> is developed at the College of Pharmacy, Hawler Medical University, 
            with support from the Kurdistan Innovation Institute (KII). 
            Our mission is to provide accessible medical AI assistance for Kurdistan's healthcare community.
          </p>
        </div>
      </div>
    </section>
  );
}
