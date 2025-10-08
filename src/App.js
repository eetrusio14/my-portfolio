import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Emma Trusio</h1>
      <h2>Computer Science + Data Analytics @ Seton Hall University</h2>
      
      <section>
        <h3>Resume</h3>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Download My Resume
        </a>
      </section>

      <section>
        <h3>Projects</h3>
        <u1>
        <li>
            Pirate Battle Game – 
            <a
              href="https://github.com/eetrusio14/pirate-game"
              target="_blank"
              rel="noopener noreferrer">
              GitHub Link
            </a>
          </li>
        </u1>
      </section>

      <section>
        <h3>Internship Experience</h3>
        <p>Colgate-Palmolive Corp. - Fall 2025</p>
        <p>Pacira Biosciences - Summer 2025</p>
        <p>Schindler Elevator Corp. - Summer 2024</p>
      </section>

      <section>
        <h3>Contact Me</h3>
        <u1>
          <p>
            Email: eetrusio@gmail.com
          </p>
          <li>
            LinkedIn:
            <a 
              href="www.linkedin.com/in/emmatrusio"
              target="_blank"
              rel="noopener noreferrer">
            </a>
          </li>
          <li>
            <a
            href="www.github.com/eetrusio14"
            target="_blank"
            rel="noopener nonreferrer">
            </a>
          </li>
        </u1>
      </section>
    </div>
  );
}

export default App;
