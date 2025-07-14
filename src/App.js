import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Emma Trusio</h1>
      <h2>Computer Science @ Seton Hall University</h2>
      
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
        <p>Colgate-Palmolive - Incoming Fall 2025</p>
        <p>Pacira Biosciences - Summer 2025</p>
        <ul>
          <li>To be populated...</li>
        </ul>
      </section>

      <section>
        <h3>Contact Me -</h3>
        <p>Email: eetrusio@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
