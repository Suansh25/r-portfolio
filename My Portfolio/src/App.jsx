import './App.css'
import Nav from './Components/nav/Nav.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx'
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
    <div className="container">
     
           <Nav toggleTheme={toggleTheme} theme={theme} />
      {/* <Home></Home> */}
      <div className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
        ↑
      </div>

      <Footer></Footer>
      </div> 
     
    </>
  )
}

export default App;
