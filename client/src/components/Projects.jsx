import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error("Error loading projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
      </div>

      {loading ? (
        <p className="loading">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="loading">No projects available.</p>
      ) : (
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p>
                <strong>Technologies:</strong> {project.technologies}
              </p>

              <div className="project-buttons">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;