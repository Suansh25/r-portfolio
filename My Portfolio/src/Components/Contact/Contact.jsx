import "./Contact.css";
import ContactSection from "./ContactSection";

function Contact() {
  return (
    <>
      <div id="scrollProgress"></div>

      <section className="contact-section">
        <ContactSection />
      </section>

      <hr className="dotted-line" />
    </>
  );
}

export default Contact;