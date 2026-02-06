export default function UseCases() {
  return (
    <section id="use-cases" className="section use-cases" aria-labelledby="use-cases-title">
      <div className="container section-header" data-animate="fade-up">
        <p className="eyebrow">How NUVA helps</p>
        <h2 id="use-cases-title">Supporting healthcare across roles</h2>
        <p className="section-subtitle">
          NUVA provides assistance tailored to different needs, always supporting professional judgment.
        </p>
      </div>

      <div className="container use-cases-grid">
        <article className="use-case-card" data-animate="fade-up" data-animate-delay="0">
          <div className="use-case-header">
            <h3>For Patients</h3>
          </div>
          <div className="use-case-body">
            <p>
              NUVA helps patients understand their symptoms and prepare for medical consultations. 
              It provides educational information about conditions and medications, helping patients 
              have more informed conversations with their doctors.
            </p>
            <ul className="use-case-list">
              <li>Symptom information and guidance</li>
              <li>Medication education and reminders</li>
              <li>Preparation for doctor visits</li>
              <li>Health literacy support</li>
            </ul>
            <p className="use-case-note">
              NUVA provides information, not medical advice. Always consult your doctor for diagnosis and treatment.
            </p>
          </div>
        </article>

        <article className="use-case-card" data-animate="fade-up" data-animate-delay="80">
          <div className="use-case-header">
            <h3>For Doctors</h3>
          </div>
          <div className="use-case-body">
            <p>
              NUVA assists physicians with quick reference information, differential diagnosis support, 
              and patient education materials. It serves as a clinical reference tool to support, 
              not replace, medical expertise.
            </p>
            <ul className="use-case-list">
              <li>Clinical reference and guidelines</li>
              <li>Differential diagnosis support</li>
              <li>Drug interaction checking</li>
              <li>Patient education resources</li>
            </ul>
            <p className="use-case-note">
              Clinical decisions remain with the physician. NUVA provides reference information only.
            </p>
          </div>
        </article>

        <article className="use-case-card" data-animate="fade-up" data-animate-delay="160">
          <div className="use-case-header">
            <h3>For Pharmacists</h3>
          </div>
          <div className="use-case-body">
            <p>
              NUVA supports pharmacists with medication information, drug interactions, dosing guidance, 
              and patient counseling support. It helps streamline pharmaceutical care while maintaining 
              professional oversight.
            </p>
            <ul className="use-case-list">
              <li>Medication information and interactions</li>
              <li>Dosing and administration guidance</li>
              <li>Patient counseling support</li>
              <li>Pharmaceutical reference</li>
            </ul>
            <p className="use-case-note">
              Pharmacist judgment is essential. NUVA provides reference support for pharmaceutical care.
            </p>
          </div>
        </article>

        <article className="use-case-card" data-animate="fade-up" data-animate-delay="240">
          <div className="use-case-header">
            <h3>For Medical Students</h3>
          </div>
          <div className="use-case-body">
            <p>
              NUVA serves as an educational resource for medical students, offering explanations of 
              medical concepts, case study support, and learning reinforcement. It complements formal 
              medical education with accessible reference materials.
            </p>
            <ul className="use-case-list">
              <li>Medical concept explanations</li>
              <li>Study and exam preparation</li>
              <li>Clinical reasoning practice</li>
              <li>Medical terminology reference</li>
            </ul>
            <p className="use-case-note">
              NUVA supports learning but does not replace medical education or clinical training.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
