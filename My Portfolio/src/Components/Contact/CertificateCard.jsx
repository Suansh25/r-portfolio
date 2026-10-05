function CertificateCard({ certificate, index }) {
  return (
    <article className="certificate-card">
      <div className="certificate-top">
        <span className="certificate-category">
          {certificate.category}
        </span>

        <span className="certificate-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="certificate-content">
        <p className="certificate-issuer">
          {certificate.issuer}<br></br> 
           {certificate.date}
        </p>

        <div className="certificate-main">
          <h3>{certificate.title}</h3>

          <p className="certificate-description">
            {certificate.description}
          </p>
        </div>

        <div className="certificate-details">
          <span className="certificate-detail-label">
            By {certificate.issuerorg}
          </span>

          <span className="certificate-detail-value">
            {certificate.credentialId}
          </span>
        </div>
      </div>

      <div className="certificate-bottom">
        <div className="certificate-tags">
          {certificate.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View credential <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default CertificateCard;