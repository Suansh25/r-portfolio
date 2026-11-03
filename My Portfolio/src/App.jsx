import "./App.css";
import { useEffect, useState } from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Nav from "./Components/nav/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Project from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent =
        totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0;

      setShowScrollTop(scrollPercent >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  return (
    <HashRouter>
      <div className="container">

        <Nav
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {showScrollTop && (
          <div
            className="scroll-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            ↑
          </div>
        )}

        <Footer />

      </div>
    </HashRouter>
  );
}

export default App;