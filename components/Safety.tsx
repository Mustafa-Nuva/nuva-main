export default function Safety() {
  return (
    <section id="safety" className="section safety" aria-labelledby="safety-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">Safety & Responsibility</p>
        <h2 id="safety-title">Built with medical ethics at the core</h2>
        <p className="section-subtitle">
          Patient safety and responsible AI use guide every decision we make.
        </p>
      </div>

      <div className="container content-grid">
        <div className="content-block emphasis" data-animate="fade-up">
          <h3>NUVA does not replace healthcare professionals</h3>
          <p>
            This is our most important principle. NUVA is designed to assist and inform, never to 
            diagnose, prescribe, or make medical decisions. Healthcare requires human judgment, 
            clinical expertise, and the irreplaceable doctor-patient relationship.
          </p>
          <p>
            Every interaction with NUVA includes clear reminders that professional medical care 
            is essential for diagnosis and treatment decisions.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="80">
          <h3>Clinical decisions belong to doctors</h3>
          <p>
            NUVA provides information and reference materials, but all clinical decisions must be 
            made by qualified, licensed healthcare professionals. The system is designed to support 
            medical professionals, not to replace their expertise or authority.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="160">
          <h3>Designed for safe medical understanding</h3>
          <p>
            NUVA is built with safeguards to provide accurate medical information while maintaining 
            appropriate boundaries. The system is designed to help users understand health topics 
            and communicate effectively with their healthcare providers.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="240">
          <h3>Continuous monitoring and improvement</h3>
          <p>
            We continuously monitor NUVA's performance and gather feedback from healthcare professionals 
            to ensure the system remains helpful, accurate, and safe. Medical AI requires ongoing 
            vigilance and responsible development practices.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="320">
          <h3>Clear limitations and transparency</h3>
          <p>
            NUVA is transparent about what it can and cannot do. The system clearly communicates 
            its limitations and encourages users to seek professional medical care when appropriate. 
            We believe transparency is essential for responsible medical AI.
          </p>
        </div>

        <div className="safety-notice" data-animate="fade-up" data-animate-delay="400">
          <p className="notice-text">
            <strong>Medical Emergency Notice:</strong> NUVA is not for emergencies. 
            If you are experiencing a medical emergency, call emergency services immediately or 
            go to the nearest emergency room.
          </p>
        </div>
      </div>
    </section>
  );
}
