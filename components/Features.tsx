export default function Features() {
  return (
    <section id="features" className="section features" aria-labelledby="features-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">Why NUVA</p>
        <h2 id="features-title">Medical AI built for Kurdistan.</h2>
        <p className="section-subtitle">
          Kurdish voice support. Medical-grade privacy. Multilingual capabilities.
        </p>
      </div>

      <div className="container features-grid">
        <article className="feature-card" data-animate="fade-up" data-animate-delay="0">
          <h3>Kurdish Voice Support</h3>
          <p>
            Speak naturally in Kurdish, Arabic, or English. First medical AI in Kurdistan with native voice recognition.
          </p>
          <ul>
            <li>Kurdish voice messages</li>
            <li>3 languages supported</li>
            <li>Natural conversation</li>
          </ul>
        </article>

        <article className="feature-card" data-animate="fade-up" data-animate-delay="80">
          <h3>Medical Assistance</h3>
          <p>
            For doctors, pharmacists, patients & students. Symptom analysis, medication info, and education support.
          </p>
          <ul>
            <li>Symptom checker</li>
            <li>Medication guidance</li>
            <li>Medical education</li>
          </ul>
        </article>

        <article className="feature-card" data-animate="fade-up" data-animate-delay="160">
          <h3>Medical Privacy</h3>
          <p>
            Your data stays secure. Voice and photos are never stored. Complete patient confidentiality.
          </p>
          <ul>
            <li>Zero data storage</li>
            <li>No photo retention</li>
            <li>HIPAA-level security</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
