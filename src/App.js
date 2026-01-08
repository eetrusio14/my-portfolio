import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Emma Trusio</h1>
        <h2>Computer Science & Data Analytics @ Seton Hall University</h2>
        <h3>Class of 2026</h3>
        <p className="tagline">Data Engineering • Visualization Developer • Problem Solving</p>
      </header>

      {/* About Me Section */}
      <section>
        <h3>About Me</h3>
        <p>
          I’m a senior at Seton Hall University pursuing a B.S. in Computer Science with a minor in Data Analytics.
          My academic and professional focus currently lies in transforming raw data in actionable insights. I am also pursuing my ACE 
          (Associate Cloud Engineer) and CompTIA+ Security Certificate.
        </p>
        <p>
          I’ve applied my skills through internships at <strong>Pacira BioSciences</strong>, 
          <strong> Colgate-Palmolive</strong>, and <strong>Schindler Elevator Corp.</strong>,
          where I developed analytics dashboards, automated business workflows, and optimized data pipelines.
          My most recent projects involved merging enterprise datasets and building an internal Power App that 
          streamlined information flow across teams — experiences that deepened my knowledge of
          data visualization, software design, and cross-functional collaboration.
        </p>
        <p>
          I’m now pursuing opportunities in <strong>data engineering</strong> and <strong>software development</strong>,
          where I can combine statistical reasoning, programming, and systems thinking to design solutions
          that make information actionable and accessible to cross-collaborative teams.
        </p>
      </section>

      {/* Technical Skills */}
      <section>
        <h3>Technical Skills</h3>
        <ul className="skills-grid">
          <li>Python</li>
          <li>Java</li>
          <li>SQL</li>
          <li>R</li>
          <li>Power Query</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Tableau</li>
          <li>SASM</li>
          <li>Git / GitHub</li>
          <li>React</li>
        </ul>
      </section>

      {/* Resume Section */}
      <section>
        <h3>Resume</h3>
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="button resume"
        >
          <FaFilePdf /> &nbsp; Download My Resume
        </a>
      </section>

      {/* Projects Section */}
      <section>
        <h3>Highlighted Projects</h3>
        <ul className="projects-list">
          <li>
            <div>Pirate Battle Game (Spring 2025)</div>
            <a
              href="https://github.com/eetrusio14/pirate-game"
              target="_blank"
              rel="noopener noreferrer"
              className="button github"
            >
              <FaGithub /> &nbsp; View on GitHub
            </a>
          </li>
          
          <li>
            <div>Operating System Simulation with Advanced Scheduling and Metric Graphs (Fall 2025)</div>
            <a
              href="https://github.com/eetrusio14/Operating-Systems-Final.git"
              target="_blank"
              rel="noopener noreferrer"
              className="button github"
            >
              <FaGithub /> &nbsp; View on GitHub
            </a>
          </li>

          <li>
            <div>NJ Housing Prices and Relative Wage Growth Predictive Model (Fall 2025)</div>
            <a
              href="https://www.linkedin.com/in/emmatrusio/"
              target="_blank"
              rel="noopener noreferrer"
              className="button linkedin"
            >
              <FaLinkedin /> &nbsp; View on LinkedIn
            </a>
          </li>
        </ul>
      </section>

      {/* Internship Section */}
      <section>
        <h3>Internship Experience</h3>
        <p><strong>Colgate-Palmolive Corp.</strong> – IT Support Intern (Fall 2025 to Present)</p>
        <p><strong>Pacira BioSciences</strong> – Security Analytics & Development Intern (Summer 2025)</p>
        <p><strong>Schindler Elevator Corp.</strong> – Data Quality & Analytics Intern (Summer 2024)</p>
      </section>

      {/* Contact Section */}
      <section>
        <h3>Connect With Me</h3>
        <div className="button-container">
          <a
            href="https://www.linkedin.com/in/emmatrusio"
            target="_blank"
            rel="noopener noreferrer"
            className="button linkedin"
          >
            <FaLinkedin /> &nbsp; LinkedIn
          </a>
          <a
            href="https://github.com/eetrusio14"
            target="_blank"
            rel="noopener noreferrer"
            className="button github"
          >
            <FaGithub /> &nbsp; GitHub
          </a>
          <a
            href="mailto:eetrusio@gmail.com"
            className="button email"
          >
            <FaEnvelope /> &nbsp; Email Me
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Emma Trusio | Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App;
