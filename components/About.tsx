export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy" data-animate="fade-up">
          <p className="eyebrow">About NUVA</p>
          <h2 id="about-title">Kurdistan's first medical AI.</h2>
          <p>
            Built for local healthcare. Kurdish voice support. Advanced AI technology designed for doctors, pharmacists, patients & students.
          </p>
          <p>
            Medical-grade privacy. Instant insights. Professional guidance. NUVA assists—your doctor decides.
          </p>
        </div>
        <div className="about-panel" data-animate="fade-left">
          <div className="glass-card stats-card" aria-label="Highlights">
            <h3>Designed for healthcare</h3>
            <ul className="stats-list">
              <li>
                <span className="stats-label">Users</span>
                <span className="stats-value">Doctors, pharmacists, patients, students</span>
              </li>
              <li>
                <span className="stats-label">Features</span>
                <span className="stats-value">Voice messages, symptom analysis, education</span>
              </li>
              <li>
                <span className="stats-label">Languages</span>
                <span className="stats-value">Kurdish, Arabic, English</span>
              </li>
            </ul>
            <p className="stats-footer">
              First in Kurdistan. Kurdish voice. Medical privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
