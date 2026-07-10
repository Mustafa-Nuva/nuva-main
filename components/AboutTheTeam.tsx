export default function AboutTheTeam() {
  return (
    <section id="team" className="section about-the-team" aria-labelledby="team-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">Meet the Team</p>
        <h2 id="team-title">The minds behind NUVA</h2>
        <p className="section-subtitle">
          Pharmacy students at Hawler Medical University working together to bring AI-powered healthcare to Kurdistan.
        </p>
      </div>

      <div className="container team-grid">
        <article className="team-member-card" data-animate="fade-up" data-animate-delay="0">
          <div className="team-info">
            <h3>Mustafa Karwan</h3>
            <p className="team-role">Co-founder</p>
          </div>
        </article>

        <article className="team-member-card" data-animate="fade-up" data-animate-delay="80">
          <div className="team-info">
            <h3>Yad Qasim</h3>
            <p className="team-role">Co-founder</p>
          </div>
        </article>
      </div>

      <div className="team-logo" data-animate="fade-up" data-animate-delay="120">
        <img
          src="/images/alone-logo-w.png"
          alt="NUVA Medical AI Logo"
          className="team-logo-img"
          width={80}
          height={80}
        />
      </div>

      <div className="institutional-backing" data-animate="fade-up" data-animate-delay="160">
        <div className="container">
          <p className="backing-text">Developed at</p>
          <div className="institution-logos">
            <div className="institution-item">
              <img 
                src="/images/OIP.webp" 
                alt="Hawler Medical University" 
                className="institution-logo"
              />
              <div className="institution-text">
                <span className="institution-name">Developed at</span>
                <span className="institution-detail">College of Pharmacy, Hawler Medical University</span>
              </div>
            </div>
            <div className="institution-divider">•</div>
            <div className="institution-item">
              <img 
                src="/images/kii logo.webp" 
                alt="Kurdistan Innovation Institute" 
                className="institution-logo"
              />
              <div className="institution-text">
                <span className="institution-name">Supported by</span>
                <span className="institution-detail">Kurdistan Innovation Institute (KII)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
