import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section className="section" id="experiences">
      <h2>Experience</h2>

      {experience.map((job, index) => (
        <div className="card" key={index}>
          <h3>{job.company}</h3>

          <p>
            {job.role} | {job.period}
          </p>

          <ul>
            {job.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}