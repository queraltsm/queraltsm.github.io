import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation(); // 👈 Esto es lo que faltaba

  return (
    <>
      <br /><br /><br /><br /><br /><br /><br /><br />

      {location.pathname !== "/contact" && (
        <div className="social-bar">
          <a href="mailto:queraltsm@outlook.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/queraltsm/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/queraltsm" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="icon" />
          </a>
        </div>
      )}

      <footer>
        <h3><span className="footer-title">queraltsm</span></h3>
        <p className="footer-text">Personal website of <strong>Queralt Sosa Mompel</strong>.</p>
      </footer>
    </>
  );
}

export default Footer;