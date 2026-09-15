import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <b>Tech:</b> {project.tech}
            </p>

            {project.video && (
              <video controls width="100%">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}

              {project.dissertation && (
                <a
                  href={project.dissertation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}