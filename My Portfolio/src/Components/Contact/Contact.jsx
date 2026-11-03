import "./Contact.css";
import ContactSection from "./ContactSection";
import Certificates from "./Certificates";

function Contact() {
  return (
    <>
      <div id="scrollProgress"></div>

      <section className="contact-section">
        <ContactSection />

        <Certificates />
      </section>

      <hr className="dotted-line" />
    </>
  );
}

export default Contact;