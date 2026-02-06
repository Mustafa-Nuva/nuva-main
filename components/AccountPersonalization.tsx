export default function AccountPersonalization() {
  return (
    <section id="account" className="section account-personalization" aria-labelledby="account-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">Your NUVA Experience</p>
        <h2 id="account-title">Personalized medical assistance</h2>
        <p className="section-subtitle">
          Create an account to customize your experience and access NUVA across devices.
        </p>
      </div>

      <div className="container content-grid">
        <div className="content-block" data-animate="fade-up">
          <h3>User profiles</h3>
          <p>
            Create a NUVA account to save your preferences and access the platform from 
            any device. Your profile allows NUVA to provide more relevant information based 
            on your role (patient, doctor, pharmacist, or student) and preferences.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="80">
          <h3>Language preference</h3>
          <p>
            Set your preferred language (Kurdish, Arabic, or English) and NUVA will remember 
            your choice across sessions. Switch languages anytime to suit your needs or 
            communicate with others.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="160">
          <h3>Conversation history</h3>
          <p>
            Optionally save your conversation history to reference previous discussions 
            with NUVA. This feature is entirely optional and can be disabled at any time. 
            You control what information is saved and can delete your history whenever you choose.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="240">
          <h3>Personalized experience</h3>
          <p>
            NUVA adapts to your needs over time, providing more relevant information based 
            on your role and interests. Medical students might see more educational content, 
            while patients might receive more symptom guidance and health literacy support.
          </p>
        </div>

        <div className="content-block" data-animate="fade-up" data-animate-delay="320">
          <h3>Privacy controls</h3>
          <p>
            Your account includes privacy settings that give you control over your data. 
            Choose what information to save, what to share, and when to delete. You can 
            export or delete your account data at any time.
          </p>
        </div>

        <div className="account-note" data-animate="fade-up" data-animate-delay="400">
          <p className="note-text">
            Account creation is optional. You can use NUVA without an account, though some 
            features like conversation history and cross-device access require a profile.
          </p>
        </div>
      </div>
    </section>
  );
}
