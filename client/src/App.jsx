import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useParams } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import { getProjects } from "./services/projectService";


function Portfolio ({ darkMode, setDarkMode }) {
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section]);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}


function Admin({ darkMode, setDarkMode }) {

  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);


  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } 
    catch (error) {
      console.error("Error fetching projects:", error);
    }
  };


  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>

      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />


      <main className="admin-page">
        <div className="admin-inner">
          <div className="admin-heading">
            <h1>Project dashboard</h1>
            <p>Add and manage the work featured in your portfolio.</p>
          </div>

        <ProjectForm
          fetchProjects={fetchProjects}
          editingProject={editingProject}
          setEditingProject={setEditingProject}
        />


        <ProjectList
          projects={projects}
          fetchProjects={fetchProjects}
          setEditingProject={setEditingProject}
        />

        </div>
      </main>

    </div>
  );
}



function App() {

  console.log("App Loaded");

  const [darkMode, setDarkMode] = useState(false);


  return (

    <HashRouter>

      <Routes>
        <Route
          path="/"
          element={
            <Portfolio
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <Admin
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/:section"
          element={
            <Portfolio
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />
      </Routes>

    </HashRouter>

  );

}


export default App;
