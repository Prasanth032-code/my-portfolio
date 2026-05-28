import Metrics from './Metrics'

export default function Hero() {
  return (
    <section className="hero">

      <h1>Prasanth Murugan</h1>

      <h3>
        Senior Software Engineer | Data Engineer | Backend Engineer
      </h3>

      <p>
        5+ years of experience building scalable backend systems,
        ETL pipelines, microservices, and cloud-native applications
        using Java, Python, AWS, and Kubernetes.
      </p>

      <Metrics />

      <div className="contact">
  <p>📍 Birmingham, UK</p>
  <p>📧 <a href="mailto:prasanthmurugan032@gmail.com">prasanthmurugan032@gmail.com</a></p>
  <p>🔗 <a href="https://www.linkedin.com/in/prasanth-m-011257154/" target="_blank" rel="noopener noreferrer">
    LinkedIn Profile
  </a></p>
</div>

      <div className="btn-group">
        <a href="#experiences" className="btn">
          View Experience
        </a>

        <a href="#projects" className="btn">
          View Projects
        </a>

       <a href="/resume.pdf" download className="btn">
         Download Resume
       </a>
      </div>

    </section>
  )
}