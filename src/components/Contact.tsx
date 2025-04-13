import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img
          src="./assets/img/profile.png"
          alt="Queralt Sosa Mompel"
          className="profile-pic"
        />
      </div>

      <div className="contact-right">
        <h3><span className="highlight-1">Contact me</span></h3>
        <p className="contact-text">
          Feel free to reach out to me! I’m always open to connecting, collaborating, and exploring new opportunities.
        </p>

        <div className="social-icons">
          <div className="social-item">
            <a href="mailto:queraltsm@outlook.com" className="social-link email">
              <FaEnvelope className="social-icon" /> Email
            </a>

          </div>

          <div className="social-item">
            <a href="https://www.linkedin.com/in/queraltsm" target="_blank" rel="noreferrer" className="social-link linkedin">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
          </div>

          <div className="social-item">
            <a href="https://github.com/queraltsm" target="_blank" rel="noreferrer" className="social-link github">
              <FaGithub className="social-icon" /> GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
