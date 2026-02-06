export default function Privacy() {
  return (
    <section id="privacy" className="section privacy" aria-labelledby="privacy-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">Privacy & Data Protection</p>
        <h2 id="privacy-title">Your medical information stays private</h2>
        <p className="section-subtitle">
          Patient confidentiality is a core principle, not an afterthought.
        </p>
      </div>

      <div className="container content-grid">
        <div className="content-block emphasis" data-animate="fade-up">
          <h3>No storage of voice messages</h3>
          <p>
            When you send a voice message to NUVA, it is processed in real-time and immediately 
            discarded. We do not store, archive, or retain voice recordings. Your voice data is 
            never saved to any database or storage system.
          </p>
        </div>

        <div className="content-block emphasis" data-animate="fade-up" data-animate-delay="80">
          <h3>No storage of uploaded photos</h3>
          <p>
            Any photos you upload for analysis are processed immediately and permanently deleted. 
            We do not retain medical images, personal photos, or any visual data. Once processing 
            is complete, the image is removed from our systems.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="160">
          <h3>Patient confidentiality is fundamental</h3>
          <p>
            Medical privacy is not negotiable. NUVA is designed with patient confidentiality as 
            a core architectural principle. We follow medical privacy standards and treat all 
            health information with the highest level of protection.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="240">
          <h3>Medical-grade security</h3>
          <p>
            NUVA uses encryption and security practices designed for healthcare applications. 
            All data transmission is encrypted, and our infrastructure follows security standards 
            appropriate for medical information systems.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="320">
          <h3>Minimal data collection</h3>
          <p>
            We collect only the information necessary to provide NUVA's services. We do not sell 
            user data, share it with third parties for marketing, or use it for purposes beyond 
            improving medical assistance. Your health information is yours.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="400">
          <h3>Transparent data practices</h3>
          <p>
            We are clear about what data we collect, how we use it, and how long we keep it. 
            Users have the right to understand how their information is handled and to request 
            deletion of their data at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
