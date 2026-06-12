export default function FeaturedProject() {
  return (
    <section className="section">
      <h2>Featured Project</h2>

      <div className="card">
        <h3>
          <a
            href="https://clipsiq.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClipsIQ – YouTube Video Insight & Summary Generator (AI Web App)
          </a>
        </h3>

        <p>
          Built an AI-powered web application that converts YouTube videos into structured summaries,
          key insights, and actionable takeaways using a custom backend API.
        </p>

        <p>
          Developed a real-time video processing pipeline that extracts and analyzes video content,
          delivering outputs such as key topics, sentiment analysis, and detailed summaries within seconds.
        </p>

        <p>
          Implemented export functionality allowing users to download AI-generated reports in PDF and Word formats,
          improving usability and knowledge retention.
        </p>
      </div>
    </section>
  )
}