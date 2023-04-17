/*
Navigation
	- Sidebar or Header
	- Footer
	- Pages MAY have other links to navigate around the app as well (like a "go back" type button)
*/

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
            <a href="https://github.com/James-Devpipline" target="_blank"> My DevPipeline Github</a>
            <a href="https://github.com/Jamesh431" target="_blank">Personal Github</a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="contact-nav-wrapper">
          <NavLink exact to='/contact'>
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  )
}