import './index.css'

function App() {
  return (
    <main className="portfolio">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <nav className="navbar">
        <div className="logo">SM<span>QA</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#lab">QA Lab</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tag">Open to Remote QA Opportunities</p>

          <h1>
            Hi, I’m <span>Sekunda Mkenda</span>
          </h1>

          <h2>Quality Assurance Analyst</h2>

          <p className="hero-text">
            I help teams deliver reliable, user-friendly, and high-quality digital
            products through structured testing, API validation, and clear bug reporting.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>

          <div className="stats">
            <div>
              <strong>Web</strong>
              <span>Testing</span>
            </div>
            <div>
              <strong>API</strong>
              <span>Validation</span>
            </div>
            <div>
              <strong>Mobile</strong>
              <span>Testing</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-pulse"></div>
          <h3>QA Focus</h3>
          <ul>
            <li>Manual Testing</li>
            <li>API Testing with Postman</li>
            <li>HTTP Toolkit Investigation</li>
            <li>Web & Mobile Testing</li>
            <li>Playwright Automation</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App