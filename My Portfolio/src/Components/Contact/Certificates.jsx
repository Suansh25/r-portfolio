import certificatesData from "../../data/certificatesData";
import CertificateCard from "./CertificateCard";

function Certificates() {
  return (
    <section className="certificates-section">

      <div className="certificates-heading">
        <div>
          <span className="section-label">Credentials</span>
          <h2>Certificates</h2>
        </div>

        <p>
          A collection of certifications and learning milestones.
        </p>
      </div>

      <div className="certificates-grid">
        {certificatesData.map((certificate) => (
          <CertificateCard
            key={certificate.id }
            certificate={certificate}
            index= {certificate.id}
          />
        ))}
      </div>

    </section>
  );
}

export default Certificates;