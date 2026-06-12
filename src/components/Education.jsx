import { education } from '../data/education'

export default function Education() {
  if (!education || education.length === 0) {
    return null
  }

  return (
    <section className="section">
      <h2>Education</h2>

      {education.map((item, index) => (
        <div className="card" key={index}>
          <p>
            <b>{item.degree}</b> — {item.university} ({item.grade})
          </p>

          {item.details && <p>{item.details}</p>}
        </div>
      ))}
    </section>
  )
}