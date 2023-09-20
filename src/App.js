
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Abdelrahman Abdelwahab</h1>
        <p>Discover my skills, projects, and more!</p>
         <Button variant="success">get start</Button>{' '}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container-fluid  bg-info">
        <div className="row  ">
          <div className="col-md-6  m-0 text-light">
            <h2>About Me</h2>
            <p>Education and experiences go here...</p>
            <a href="/path/to/resume.pdf" download>
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = ({ skills }) => {
  return (
    <section className="skills-section d-flex bg-dark text-light ">
      <div className="container col-6">
        <h2>Skills</h2>
        <br></br>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
         <div className='col-lg-6'>
                <br></br>
      <br></br>
      <ProgressBar variant="success" now={40} />
      <br></br>
      <ProgressBar variant="info" now={20} />
            <br></br>
      <ProgressBar variant="warning" now={60} />
            <br></br>
      <ProgressBar variant="danger" now={80} />
                 <br></br>
      <ProgressBar variant="danger" now={80} />
    </div>
    </section>
  );
};

const PortfolioSection = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-md-6 portfolio-card ${index % 2 === 0 ? 'dark-bg' : 'light-bg'}`}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'];
  const projects = [
    { title: 'Project 1', description: 'Description for Project 1' },
    { title: 'Project 2', description: 'Description for Project 2' },
    { title: 'Project 3', description: 'Description for Project 3' },
  ];

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <PortfolioSection projects={projects} />
      <Footer />
    </div>
  );
};

export default App;

