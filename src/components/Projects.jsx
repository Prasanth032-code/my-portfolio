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
            <p><b>Tech:</b> {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
}