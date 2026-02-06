export default function LanguageAccessibility() {
  return (
    <section id="language" className="section language-accessibility" aria-labelledby="language-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">Language & Accessibility</p>
        <h2 id="language-title">Medical assistance in your language</h2>
        <p className="section-subtitle">
          Breaking language barriers in healthcare with Kurdish, Arabic, and English support.
        </p>
      </div>

      <div className="container content-grid">
        <div className="content-block highlight" data-animate="fade-up">
          <h3>Kurdish voice support</h3>
          <p>
            NUVA is the first medical AI in Kurdistan to support Kurdish voice messages. 
            Speak naturally in Kurdish and receive responses in your native language. 
            This represents a significant step forward in making medical information 
            accessible to Kurdish speakers.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="80">
          <h3>Three languages, one platform</h3>
          <p>
            NUVA supports Kurdish, Arabic, and English. Users can switch between languages 
            seamlessly, ensuring that language is never a barrier to understanding medical 
            information. Each language receives the same level of attention and accuracy.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="160">
          <h3>Natural conversation</h3>
          <p>
            Communicate with NUVA using natural language, whether typing or speaking. 
            The system understands medical questions in everyday language, making it 
            accessible to users without medical training.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="240">
          <h3>Accessibility for all</h3>
          <p>
            Voice support makes NUVA accessible to users who may have difficulty typing 
            or reading. By supporting multiple input methods and languages, we aim to 
            make medical information available to everyone in Kurdistan, regardless of 
            literacy level or physical ability.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="320">
          <h3>Cultural and regional understanding</h3>
          <p>
            NUVA is designed with awareness of the healthcare context in Kurdistan. 
            The system understands regional medical terminology and common health concerns, 
            providing relevant and culturally appropriate information.
          </p>
        </div>

        <div className="language-stats" data-animate="fade-up" data-animate-delay="400">
          <div className="stat-item">
            <span className="stat-label">Languages</span>
            <span className="stat-value">Kurdish, Arabic, English</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Voice support</span>
            <span className="stat-value">First in Kurdistan</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Input methods</span>
            <span className="stat-value">Text, voice, images</span>
          </div>
        </div>
      </div>
    </section>
  );
}
