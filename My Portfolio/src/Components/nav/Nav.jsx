import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './Nav.css';
import Home from '../Home/Home.jsx';
import Skills from '../Skills/Skills.jsx';
import Education from '../Education/Education.jsx';
import Contact from '../Contact/Contact.jsx';
import Project from '../Projects/Projects';

function Nav({ toggleTheme, theme }) {


  return (
    <BrowserRouter>
      <header>
        <nav className='navBar'>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact.</Link>
           
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`icon ${theme}`}>
              {theme === "light" ? "🌙" : "🔆"}
     
          </div>
          </div>
        </nav>

      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Nav;
