import "./App.css";

const skills = [
  { name: "React.js", icon: "⚛" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML5", icon: "◈" },
  { name: "CSS3", icon: "✦" },
  { name: "Node.js", icon: "N" },
  { name: "Express.js", icon: "E" },
  { name: "MongoDB", icon: "M" },
  { name: "MySQL", icon: "SQL" },
  { name: "REST API", icon: "API" },
  { name: "Git & GitHub", icon: "G" },
];

const projects = [
  {
    number: "01",
    title: "Myntra Fashion Website",
    link: "https://myntra-web-igvk.onrender.com",
    description:
      "A responsive fashion shopping website inspired by Myntra, featuring product collections, modern layouts, and a user-friendly browsing experience across different screen sizes.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    number: "02",
    title: "Tic Tac Toe",
    link: "https://tictoc-gt9h.onrender.com",
    description:
      "An interactive browser game featuring player turns, win and draw detection, and reset functionality, built with JavaScript and a responsive interface.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    number: "03",
    title: "Modern Calculator",
    link: "https://calculator-idlm.onrender.com",
    description:
      "A modern calculator with an intuitive interface and interactive controls for basic arithmetic operations, designed for a smooth user experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    number: "04",
    title: "Full Stack Practice Applications",
    description:
      "Practice applications developed to strengthen full-stack fundamentals, including React components, REST API integration, backend logic, database connectivity, and CRUD operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

function App() {
  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>
        <div className="grid"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>&lt;/&gt;</span> DevSpace
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="available">
            <span className="pulse"></span>
            Open to Opportunities
          </div>

          <p className="hello">HELLO, I'M RAKESH</p>

          <h1>
            Full Stack
            <br />
            <span>Web Developer.</span>
          </h1>

          <p className="hero-description">
            I build responsive, user-friendly web applications using
            React.js, Node.js, Express.js, MongoDB, and modern web
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects <span>→</span>
            </a>

            <a href="#contact" className="outline-btn">
              Get In Touch
            </a>
          </div>

          <div className="quick-tech">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express.js</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span>developer.js</span>
          </div>

          <div className="code">
            <p>
              <span className="purple">const</span>{" "}
              <span className="blue">developer</span> = {"{"}
            </p>

            <p className="indent">
              name: <span className="green">"Rakesh Mishra"</span>,
            </p>

            <p className="indent">
              role: <span className="green">"Full Stack Developer"</span>,
            </p>

            <p className="indent">
              frontend: <span className="green">"React.js"</span>,
            </p>

            <p className="indent">
              backend: <span className="green">"Node.js"</span>,
            </p>

            <p className="indent">
              database: <span className="green">"MongoDB"</span>,
            </p>

            <p className="indent">
              focus: <span className="green">"Building for the Web"</span>
            </p>

            <p>{"};"}</p>
            <p className="cursor">_</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section-heading">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>
            Turning ideas into <span>web experiences.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a Full Stack Web Developer with a Bachelor of
              Computer Applications (BCA) degree and a strong interest
              in building modern web applications.
            </p>

            <p>
              I work with frontend technologies such as HTML, CSS,
              JavaScript, and React.js, along with backend technologies
              including Node.js, Express.js, and MongoDB.
            </p>

            <p>
              I enjoy building practical projects, learning new
              technologies, and improving my problem-solving and
              development skills.
            </p>

            <div className="about-tags">
              <span>Web Development</span>
              <span>Responsive UI</span>
              <span>REST APIs</span>
              <span>Continuous Learning</span>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <strong>10+</strong>
              <span>Technologies Explored</span>
            </div>

            <div className="stat">
              <strong>03</strong>
              <span>Live Project Demos</span>
            </div>

            <div className="stat">
              <strong>BCA</strong>
              <span>Graduate</span>
            </div>

            <div className="stat">
              <strong>MERN</strong>
              <span>Development Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-heading center">
          <p className="section-label">02 — TECHNICAL SKILLS</p>
          <h2>
            Tools I <span>work with.</span>
          </h2>
          <p>
            Technologies and tools I use while developing web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <span className="arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="section-heading">
          <p className="section-label">03 — SELECTED PROJECTS</p>
          <h2>
            Things I've <span>built.</span>
          </h2>
          <p>
            A selection of projects demonstrating my web development
            skills and practical learning.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow"
                  aria-label={`Open ${project.title} live website`}
                  title="Live Demo"
                >
                  Live ↗
                </a>
              ) : (
                <span className="project-arrow" title="Project details">
                  ↗
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section education">
        <div className="section-heading center">
          <p className="section-label">04 — EDUCATION</p>
          <h2>
            Academic <span>background.</span>
          </h2>
        </div>

        <div className="education-card">
          <div className="education-year">2023 — 2026</div>

          <div>
            <h3>Bachelor of Computer Applications</h3>
            <p>BCA • Computer Applications • Software Development</p>
          </div>

          <div className="education-badge">BCA</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="contact-box">
          <p className="section-label">05 — LET'S CONNECT</p>

          <div className="contact-icon">{"</>"}</div>

          <h2>
            Good ideas deserve
            <br />
            <span>great execution.</span>
          </h2>

          <p className="contact-description">
            Looking for a developer who enjoys turning ideas into
            real-world web experiences? Let's connect, exchange ideas,
            and build something meaningful together.
          </p>

          <div className="contact-status">
            <span className="pulse"></span>
            Open to Web Development Opportunities
          </div>

          <div className="contact-buttons">
            <a
              href="mailto:rakeshmishra3807@gmail.com"
              className="primary-btn"
            >
              Let's Talk <span>↗</span>
            </a>

            <a
              href="https://github.com/rakesh-mishra-web"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
            >
              Explore GitHub ↗
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">✉</div>

              <div className="contact-item-info">
                <span>EMAIL ME</span>
                <a href="mailto:rakeshmishra3807@gmail.com">
                  rakeshmishra3807@gmail.com
                </a>
              </div>

              <span className="contact-arrow">↗</span>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">☎</div>

              <div className="contact-item-info">
                <span>CALL ME</span>
                <a href="tel:+917480933807">+91 74809 33807</a>
              </div>

              <span className="contact-arrow">↗</span>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">⌘</div>

              <div className="contact-item-info">
                <span>GITHUB</span>
                <a
                  href="https://github.com/rakesh-mishra-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/rakesh-mishra-web
                </a>
              </div>

              <span className="contact-arrow">↗</span>
            </div>
          </div>

          <p className="contact-note">
            Have a project or opportunity in mind? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="#home" className="logo footer-brand">
          <span>&lt;/&gt;</span> Code with Purpose
        </a>

        <p>Crafted with React.js &amp; creativity.</p>
        <p>© 2026 | Built to keep learning and creating.</p>
      </footer>
    </div>
  );
}

export default App; 