function ContactIntro({ data }) {
  const sections = [
    data.intro,
    data.experience,
    data.engagedIn,
    data.propensity,
    data.aspiration,
   // data.extra,
  ];

  return (
    <div className="contentforcontact">

      {sections.map((section) => (
        <article
          className="contentforcontact-p"
          key={section.title}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          
        </article>
      ))}

    </div>
  );
}

export default ContactIntro;