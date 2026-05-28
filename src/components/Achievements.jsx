import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section className="section">
      <h2>Achievements</h2>

      <div className="card">
        {achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </div>
    </section>
  )
}