"use client";

import { FormEvent } from "react";

export default function CTA() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("This is a demo form. Connect it to your backend or email service.");
  };

  return (
    <section id="cta" className="section cta" aria-labelledby="cta-title">
      <div className="container cta-inner" data-animate="fade-up">
        <div className="cta-copy">
          <p className="eyebrow">Try NUVA</p>
          <h2 id="cta-title">Explore medical AI assistance</h2>
          <p>
            NUVA is available to healthcare professionals, patients, and medical students in Kurdistan. 
            Request access to begin using AI-powered medical information and guidance.
          </p>
        </div>
        <form className="cta-form" aria-label="Request access to NUVA" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="field">
              <span className="field-label">Email address</span>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
          </div>
          <div className="form-row">
            <label className="field">
              <span className="field-label">Your role</span>
              <textarea name="use_case" rows={3} placeholder="Doctor, pharmacist, patient, or medical student? Tell us how you would use NUVA."></textarea>
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-full-width">Request access</button>
          <p className="form-note">NUVA provides information and support. Medical decisions remain with healthcare professionals.</p>
        </form>
      </div>
    </section>
  );
}
