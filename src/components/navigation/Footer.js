import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="github-wrapper">
          <div className="text-wrapper">
            <p>Check out my DevPipeline and personal Github!</p>
          </div>

          <div className="github-links">
            <a
              id="devpipeline-github"
              href="https://github.com/James-Devpipline"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a
              id="personal-github"
              href="https://github.com/Jamesh431"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="contact-nav-wrapper">
          <NavLink exact to="/contact">
            Contact Us
          </NavLink>
        </div>

        <div className="about-nav-wrapper">
          <NavLink exact to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
