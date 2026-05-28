import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}