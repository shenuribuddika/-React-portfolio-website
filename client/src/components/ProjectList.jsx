import { deleteProject } from "../services/projectService";

function ProjectList({
  projects,
  fetchProjects,
  setEditingProject,
}) {
  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };

  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div
          key={project._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>
            <strong>Technologies:</strong> {project.technologies}
          </p>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Link
          </a>

          <br />
          <br />

          <button onClick={() => setEditingProject(project)}>
            Edit
          </button>

          &nbsp;&nbsp;

          <button onClick={() => handleDelete(project._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;