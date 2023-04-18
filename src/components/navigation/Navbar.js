/*
Navigation
	- Sidebar or Header
	- Footer
	- Pages MAY have other links to navigate around the app as well (like a "go back" type button)
*/

import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="home-nav-wrapper">
          <NavLink exact to='/'>
            Home
          </NavLink>
        </div>
      </div>

      <div className="nav-right">
        <div className="search-bar">
          <input
            // value={props.SearchQuery}
            // onChange={((event)=> props.setSearchQuery(event.target.value))}
            type="text"
            placeholder="Search for a show"
          />
        </div>

        <div className="search-button">
          <button type="submit">?</button>
        </div>
      </div>
    </div>
  )
}