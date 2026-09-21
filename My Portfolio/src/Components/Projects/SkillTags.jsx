function SkillTags({ skills }) {
  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <a
          href="#"
          className="skills"
          key={skill}
        >
          {skill}
        </a>
      ))}
    </div>
  );
}

export default SkillTags;