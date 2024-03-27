import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Home from "./components/Home/Home.jsx";
import {BrowserRouter} from "react-router-dom"
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

function App() {

  const [activeClass, setActiveClass] = useState(() => {
    // Get active class from local storage, default to "home" if not found
    return localStorage.getItem("activeClass") || "home";
  });

  const setClassName = (name) => {
    setActiveClass(name);
    localStorage.setItem("activeClass", name);
  };


  return (
    <BrowserRouter>
    <Header  setClassName={setClassName}  activeClass={activeClass} setActiveClass={setActiveClass} />
    <div>
      <Home />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <AboutMe setClassName={setClassName}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
