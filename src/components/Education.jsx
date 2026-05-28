import { education } from '../data/education'

export default function Education() {
  return (
    <section className="section">
      <h2>Education</h2>

      {education.map((item, index) => (
        <div className="card" key={index}>
          <p>
            <b>{item.degree}</b> — {item.university}
            ({item.grade})
          </p>
        </div>
      ))}
    </section>
  )
}