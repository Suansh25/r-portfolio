import contactData from "../../data/contactData";
import ContactIntro from "./ContactIntro";
import ContactSocials from "./ContactSocials";
import Poem from "./Poem";

function ContactSection() {
  return (
    <div className="titleforcontact">

      <h1>{contactData.name}</h1>

      <h2 className="t2">
        <span>{contactData.tagline}</span>
      </h2>

      <Poem />

      <ContactIntro data={contactData} />

      <ContactSocials data={contactData.socials} />

    </div>
  );
}

export default ContactSection;