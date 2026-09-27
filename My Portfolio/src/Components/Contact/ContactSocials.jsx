function ContactSocials({ data }) {
  return (
    <div className="contact-socials">

      <h2>{data.title}</h2>

      <ul className="social-links">
        {data.links.map((link) => (
          <li key={link.name}>
            <a
              className={link.className}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ContactSocials;