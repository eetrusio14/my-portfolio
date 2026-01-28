import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="bg-grid" aria-hidden="true" />

      <div className="container">
        <header className="hero">
          <div className="hero-top">
            <div className="hero-copy">
              <h1 className="name">Emma Trusio</h1>
              <p className="subtitle">Computer Science & Data Analytics @ Seton Hall University</p>
              <p className="meta">Class of 2026</p>
            </div>

            <div className="hero-actions">
              <a
                href="https://www.linkedin.com/in/emmatrusio"
                target="_blank"
                rel="noopener noreferrer"
                className="iconbtn"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/eetrusio14"
                target="_blank"
                rel="noopener noreferrer"
                className="iconbtn"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:eetrusio@gmail.com"
                className="iconbtn"
                aria-label="Email"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <p className="tagline">
            Data Engineering <span className="dot" /> Visualization Developer <span className="dot" /> Problem Solving
          </p>

          <div className="cta-row">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="button resume"
            >
              <FaFilePdf /> Download My Resume
            </a>

            <a href="mailto:eetrusio@gmail.com" className="button ghost">
              <FaEnvelope /> Contact
            </a>
          </div>
        </header>

        {/* About Me Section */}
        <section className="card">
          <h3 className="section-title">About</h3>
          <p>
            I’m a senior at Seton Hall University pursuing a B.S. in Computer Science with a minor in Data Analytics.
            My academic and professional focus currently lies in transforming raw data in actionable insights. I am also
            pursuing my <strong>Google Cloud ACE (Associate Cloud Engineer)</strong> and{' '}
            <strong>CompTIA+ Security Certificate</strong>.
          </p>
          <p>
            I’ve applied my skills through internships at <strong>Pacira BioSciences</strong>,{' '}
            <strong> Colgate-Palmolive</strong>, and <strong>Schindler Elevator Corp.</strong>, where I developed
            analytics dashboards, automated business workflows, and optimized data pipelines. My most recent projects
            involved merging enterprise datasets and building an internal Power App that streamlined information flow
            across teams — experiences that deepened my knowledge of data visualization, software design, and
            cross-functional collaboration.
          </p>
          <p>
            I’m now pursuing opportunities in <strong>data engineering</strong> and <strong>software development</strong>,
            where I can combine statistical reasoning, programming, and systems thinking to design solutions that make
            information actionable and accessible to cross-collaborative teams.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="card">
          <h3 className="section-title">Technical Skills</h3>
          <ul className="skills-grid">
            <li>Python</li>
            <li>Java</li>
            <li>PostgreSQL</li>
            <li>R</li>
            <li>Power Query</li>
            <li>PySpark</li>
            <li>Scikit-Learn</li>
            <li>JavaScript</li>
            <li>Tableau</li>
            <li>Pandas</li>
            <li>Git / GitHub</li>
            <li> Hadoop</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="card">
          <h3 className="section-title">Highlighted Projects</h3>

          <ul className="projects">
            <li className="project">
              <div className="project-head">
                <div>
                  <div className="project-title">LightEmAll Game</div>
                  <div className="project-sub">Fall 2025</div>
                </div>
                <div className="tags">
                  <span className="tag">Java</span>
                  <span className="tag">Algorithms</span>
                  <span className="tag">Game Logic</span>
                </div>
              </div>
              <a
                href="https://github.com/eetrusio14/light-em-all"
                target="_blank"
                rel="noopener noreferrer"
                className="button github"
              >
                <FaGithub /> View on GitHub
              </a>
            </li>

            <li className="project">
              <div className="project-head">
                <div>
                  <div className="project-title">Operating System Simulation with Advanced Scheduling and Metric Graphs</div>
                  <div className="project-sub">Fall 2025</div>
                </div>
                <div className="tags">
                  <span className="tag">Systems</span>
                  <span className="tag">Scheduling</span>
                  <span className="tag">Metrics</span>
                </div>
              </div>
              <a
                href="https://github.com/eetrusio14/Operating-Systems-Final.git"
                target="_blank"
                rel="noopener noreferrer"
                className="button github"
              >
                <FaGithub /> View on GitHub
              </a>
            </li>

            <li className="project">
              <div className="project-head">
                <div>
                  <div className="project-title">NJ Housing Prices and Relative Wage Growth Predictive Model</div>
                  <div className="project-sub">Fall 2025</div>
                </div>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Modeling</span>
                  <span className="tag">Data</span>
                </div>
              </div>
              <a
                href="https://github.com/eetrusio14/nj-housing-prices-and-relative-wage-growth-predictive-model"
                target="_blank"
                rel="noopener noreferrer"
                className="button github"
              >
                <FaGithub /> View on GitHub
              </a>
            </li>

            <li className="project">
              <div className="project-head">
                <div>
                  <div className="project-title">Palindrome Checker</div>
                  <div className="project-sub">Fall 2025</div>
                </div>
                <div className="tags">
                  <span className="tag">SASM</span>
                  <span className="tag">Conditional Jumps</span>
                  <span className="tag">Validation</span>
                </div>
              </div>
              <a
                href="https://github.com/eetrusio14/palindrome-verifier-sasm"
                target="_blank"
                rel="noopener noreferrer"
                className="button github"
              >
                <FaGithub /> View on GitHub
              </a>
            </li>
          </ul>
        </section>

        {/* Internship Section */}
        <section className="card">
          <h3 className="section-title">Internship Experience</h3>
          <ul className="timeline">
            <li>
              <strong>Colgate-Palmolive Corp.</strong> – IT Support Intern <span className="muted">(Fall 2025 to Present)</span>
            </li>
            <li>
              <strong>Pacira BioSciences</strong> – IT Cybersecurity Intern <span className="muted">(Summer 2025)</span>
            </li>
            <li>
              <strong>Seton Hall University (PC Support Services)</strong> – Desktop Engineering Student Worker{' '}
              <span className="muted">(Academic Year 2024-2025)</span>
            </li>
            <li>
              <strong>Schindler Elevator Corp.</strong> – Data Quality & Analytics Intern <span className="muted">(Summer 2024)</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="card">
          <h3 className="section-title">Connect</h3>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/emmatrusio"
              target="_blank"
              rel="noopener noreferrer"
              className="button linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/eetrusio14"
              target="_blank"
              rel="noopener noreferrer"
              className="button github"
            >
              <FaGithub /> GitHub
            </a>
            <a href="mailto:eetrusio@gmail.com" className="button email">
              <FaEnvelope /> Email Me
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 Emma Trusio | Hosted on GitHub Pages</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
