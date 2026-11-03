import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ toggleTheme, theme }) {
  return (
    <header>
      <nav className="navBar">

        <Link to="/home" className="nav-link">
          Home
        </Link>

        <Link to="/projects" className="nav-link">
          Projects
        </Link>

        <Link to="/contact" className="nav-link">
          About Me.
        </Link>

        <div
          className="theme-toggle"
          onClick={toggleTheme}
        >
          <div className={`icon ${theme}`}>
            {theme === "light" ? "🌙" : "🔆"}
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Nav;