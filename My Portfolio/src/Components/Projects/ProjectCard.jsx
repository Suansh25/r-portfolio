import SkillTags from "./SkillTags";
import ImageGallery from "./ImageGallery";
import ResultsGrid from "./ResultsGrid";
import Objectives from "./Objectives";

function ProjectCard({ project }) {
  return (
    <div className="card" id={project.id}>

      <h1>
        <span className="card-number">
          {project.number}
        </span>
        {project.title}
      </h1>

      <h3 className="card-subtitle">
        {project.subtitle}
      </h3>

      <SkillTags skills={project.skills} />

      <div className="desktop-text">
        {project.description}
      </div>

      <div className="mobile-text">
        {project.mobileDescription}
      </div>

      <h3 className="section-label">
        Objectives :
      </h3>

      <div className="desktop-text">
        <Objectives objectives={project.objectives} />
      </div>

      <div className="Images-scroll">
        <ImageGallery images={project.images} />
      </div>

      <h3 className="section-label">
        Results :
      </h3>

      <ResultsGrid results={project.results} />

      <a
        className="github-link skills"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Link
      </a>

    </div>
  );
}

export default ProjectCard;