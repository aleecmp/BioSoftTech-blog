import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        Copyright &copy; Alexis Campusano M - {new Date().getFullYear()}
      </div>
      <div className="footer-info">Full Stack Developer</div>
      <div className="footer-container">
        <a
          href="https://www.linkedin.com/in/alexiscampusanodev"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/aleecmp"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
