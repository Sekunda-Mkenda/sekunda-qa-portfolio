import { useState } from 'react'
import './index.css'

function App() {
  const [isTestRunnerOpen, setIsTestRunnerOpen] = useState(false)

  return (
    <main className="portfolio">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <nav className="navbar">
        <div className="logo">
          SM<span>QA</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#lab">QA Lab</a>
          <a href="#contact">Contact</a>

         <button
  className="test-runner-btn"
  onClick={() => setIsTestRunnerOpen(true)}
>
  ⚙ Test Runner
</button>
        </div>
      </nav>

      {isTestRunnerOpen && (
        <div className="test-runner-overlay">
          <div className="test-runner-panel">
            <button
              className="close-runner"
              onClick={() => setIsTestRunnerOpen(false)}
            >
              ×
            </button>

            <div className="runner-header">
              <span className="runner-icon">⚙</span>
              <div>
                <h3>QA Test Runner</h3>
                <p>Playwright automation practice</p>
              </div>
            </div>

            <p className="runner-description">
              Run Playwright tests through GitHub Actions or view my QA portfolio
              automation practice repository.
            </p>

            <div className="runner-status">
              <div>
                <span>Status</span>
                <strong>Ready</strong>
              </div>
              <div>
                <span>Browser</span>
                <strong>Chromium</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>UI Testing</strong>
              </div>
            </div>

            <div className="runner-actions">
  <a
    href="https://github.com/Sekunda-Mkenda/sekunda-qa-portfolio/actions"
    target="_blank"
    rel="noreferrer"
    className="runner-primary"
  >
    Run Tests
  </a>

  <a
    href="https://github.com/Sekunda-Mkenda/sekunda-qa-portfolio/actions"
    target="_blank"
    rel="noreferrer"
    className="runner-secondary"
  >
    View Report
  </a>

  <a
    href="https://github.com/Sekunda-Mkenda/sekunda-qa-portfolio"
    target="_blank"
    rel="noreferrer"
    className="runner-secondary"
  >
    View Repository
  </a>
</div>

            <p className="runner-note">
              Latest Playwright report link will be added after report publishing
              is configured.
            </p>
          </div>
        </div>
      )}

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

      <section className="about-section" id="about">
        <div className="section-heading">
          <p>About Me</p>
          <h2>Building confidence in digital products through QA</h2>
        </div>

        <div className="about-grid">
          <div className="about-card main-about">
            <h3>Who I Am</h3>

            <p>
              I am a Quality Assurance Analyst based in Dar es Salaam, Tanzania,
              with hands-on experience in manual testing, API testing, web and
              mobile application testing, UI/UX validation, bug reporting, and
              workflow validation.
            </p>

            <p>
              I have tested real-world systems across logistics, payment
              transactions, disbursements, event ticketing, SMS workflows,
              dashboards, reports, filters, exports, and mobile app user journeys.
            </p>
          </div>

          <div className="about-card">
            <h3>What I Focus On</h3>
            <ul>
              <li>Clear and reproducible bug reports</li>
              <li>Reliable user journeys</li>
              <li>API request and response validation</li>
              <li>Regression and smoke testing</li>
              <li>Business rule validation</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Tools I Use</h3>
            <ul>
              <li>Postman</li>
              <li>HTTP Toolkit</li>
              <li>Chrome DevTools</li>
              <li>GitHub Issues</li>
              <li>Playwright</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p>Skills & Toolset</p>
          <h2>Practical QA skills for real-world product testing</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span>01</span>
            <h3>Manual Testing</h3>
            <p>
              Functional, smoke, regression, exploratory, and user acceptance testing
              across web and mobile applications.
            </p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>API Testing</h3>
            <p>
              Validating API requests, responses, status codes, required fields,
              error messages, and data consistency.
            </p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>Postman</h3>
            <p>
              Testing endpoints, request payloads, response bodies, headers,
              authentication behavior, and backend validation.
            </p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>HTTP Toolkit</h3>
            <p>
              Inspecting web and mobile network traffic to investigate API calls,
              payloads, responses, and integration behavior.
            </p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>Chrome DevTools</h3>
            <p>
              Investigating frontend behavior, console errors, network requests,
              UI issues, and browser-level debugging clues.
            </p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>Playwright Automation</h3>
            <p>
              Writing beginner-to-intermediate web automation tests using locators,
              assertions, headed mode, UI mode, and HTML reports.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p>QA Projects</p>
          <h2>Real-world QA Experience Across Business-critical Systems</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card featured-project">
            <div className="project-top">
              <span>Payments</span>
              <strong>01</strong>
            </div>

            <h3>Payment Gateway & Transaction Platform</h3>

            <p>
              Validated transaction flows, payment statuses, disbursement workflows,
              merchant and sub-merchant behavior, reporting dashboards, filters,
              exports, and reconciliation-related data accuracy.
            </p>

            <div className="project-tags">
              <span>API Testing</span>
              <span>Postman</span>
              <span>Payments</span>
              <span>Reports</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>Logistics</span>
              <strong>02</strong>
            </div>

            <h3>Cargo & Logistics Management System</h3>

            <p>
              Tested cargo booking, sender and receiver workflows, onboarding,
              offboarding, delivery status updates, ticket printing, agent operations,
              permissions, reports, filters, exports, and dashboard behavior.
            </p>

            <div className="project-tags">
              <span>Manual QA</span>
              <span>Workflow Testing</span>
              <span>Mobile App</span>
              <span>Reports</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>Events</span>
              <strong>03</strong>
            </div>

            <h3>Event Ticketing & Verification Platform</h3>

            <p>
              Tested event onboarding, ticket publishing, customer bookings,
              ticket sales, invitation workflows, ticket scanning, verification,
              reports, agent app journeys, and user-facing ticket flows.
            </p>

            <div className="project-tags">
              <span>Mobile Testing</span>
              <span>Ticketing</span>
              <span>QR Verification</span>
              <span>UI/UX</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>Communication</span>
              <strong>04</strong>
            </div>

            <h3>SMS Workflow & Communication System</h3>

            <p>
              Validated sender ID workflows, SMS scheduling, delivery behavior,
              retry behavior, portal actions, logs, reports, message visibility,
              and communication-related operational flows.
            </p>

            <div className="project-tags">
              <span>Exploratory Testing</span>
              <span>Logs</span>
              <span>Workflow Validation</span>
              <span>Reports</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>Transport</span>
              <strong>05</strong>
            </div>

            <h3>Transport Management Systems</h3>

            <p>
              Tested transport-related platforms for bus and airline workflows,
              including route search, booking journeys, passenger details,
              schedule visibility, language behavior, page navigation,
              responsiveness, and user-facing validation.
            </p>

            <div className="project-tags">
              <span>Web QA</span>
              <span>Mobile QA</span>
              <span>Booking Flows</span>
              <span>UI/UX</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>Automation</span>
              <strong>06</strong>
            </div>

            <h3>Playwright Automation Practice</h3>

            <p>
              Built Playwright tests for homepage validation, search flows,
              multilingual behavior, locators, assertions, headed execution,
              UI mode, and HTML reporting as part of my automation practice.
            </p>

            <div className="project-tags">
              <span>Playwright</span>
              <span>JavaScript</span>
              <span>GitHub</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App