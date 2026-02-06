export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-it-works" aria-labelledby="how-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">How it works</p>
        <h2 id="how-title">Medical help in 3 steps.</h2>
        <p className="section-subtitle">
          Fast, private, and professional medical assistance.
        </p>
      </div>

      <div className="container steps-grid">
        <article className="step-card" data-animate="fade-up" data-animate-delay="0">
          <span className="step-index">01</span>
          <h3>Share your concern</h3>
          <p>
            Voice message or text in Kurdish, Arabic, or English. Send photos if needed.
          </p>
        </article>

        <article className="step-card" data-animate="fade-up" data-animate-delay="80">
          <span className="step-index">02</span>
          <h3>Get AI insights</h3>
          <p>
            Instant symptom analysis, medication info, or medical education support.
          </p>
        </article>

        <article className="step-card" data-animate="fade-up" data-animate-delay="160">
          <span className="step-index">03</span>
          <h3>Consult your doctor</h3>
          <p>
            Use insights to ask better questions. NUVA guides, doctors decide.
          </p>
        </article>
      </div>
    </section>
  );
}
