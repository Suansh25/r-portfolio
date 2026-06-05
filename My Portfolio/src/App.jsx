import './App.css'
import Nav from './Components/nav/Nav.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx'
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme effect
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / totalHeight) * 100;

      setShowScrollTop(scrollPercent >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container">
        <Nav toggleTheme={toggleTheme} theme={theme} />
        {/* <Home /> */}

        {showScrollTop && (
          <div
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;