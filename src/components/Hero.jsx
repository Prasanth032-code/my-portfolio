import Metrics from './Metrics'

export default function Hero() {
  return (
    <section className="hero">

      <h1>Prasanth Murugan</h1>

      <h3>
           Software Developer | Analytics Professional
      </h3>

      <p>
        Experienced Software Engineer specialising in backend development,
enterprise applications, and cloud-based technologies. Combining 5 years of
software engineering experience with a Master's in Business Analytics to
deliver data-driven solutions, optimise business processes, and support
informed decision-making through technology and analytics.
      </p>

      <Metrics />

      <div className="contact">
  <p>📍 Birmingham, UK</p>
  <p>📧 <a href="mailto:prasanthmurugan032@gmail.com">prasanthmurugan032@gmail.com</a></p>
  <p>🔗 <a href="https://www.linkedin.com/in/prasanth-m-011257154/" target="_blank" rel="noopener noreferrer">
    LinkedIn Profile
  </a></p>
   <p>🔗 <a href="https://github.com/Prasanth032-code/" target="_blank" rel="noopener noreferrer">
    GitHub Profile
  </a></p>
</div>

      <div className="btn-group">
        <a href="#experiences" className="btn">
          View Experience
        </a>

        <a href="#projects" className="btn">
          View Projects
        </a>

       <a href="/PRASANTH_MURUGAN_resume.pdf" download className="btn">
         Download Resume
       </a>
      </div>

    </section>
  )
}