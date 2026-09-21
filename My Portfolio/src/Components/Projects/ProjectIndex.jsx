function ProjectIndex({ projects }) {
  return (
    <div className="project-index">
      <details>
        <summary>Index</summary>

        <div className="project-links">
          {projects.map((project) => (
            <a
              href={`#${project.id}`}
              key={project.id}
            >
              {project.number}. {project.title}
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}

export default ProjectIndex;