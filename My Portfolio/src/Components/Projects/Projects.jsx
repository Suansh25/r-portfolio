import "./Projects.css";

import ProjectCard from "./ProjectCard";
import ProjectIndex from "./ProjectIndex";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <>
      <div id="scrollProgress"></div>

      <ProjectIndex projects={projectsData} />

      {projectsData.map((project, index) => (
        <div key={project.id}>
          <ProjectCard project={project} />

          {index < projectsData.length - 1 && (
            <hr className="dotted-line" />
          )}
        </div>
      ))}
    </>
  );
}

export default Projects;