import { deleteProject } from "../services/projectService";
function ProjectList({ projects, fetchProjects, setEditingProject }) {
  const handleDelete = async (id) => { await deleteProject(id); fetchProjects(); };
  return <section className="admin-card"><h2>Saved projects</h2>
    {projects.length === 0 ? <p>No projects saved yet.</p> : projects.map((project) => <div key={project._id} className="admin-project">
      <h3>{project.title}</h3><p>{project.description}</p><p><strong>Technologies:</strong> {project.technologies}</p>
      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub Link</a>}
      <div className="admin-actions"><button type="button" onClick={() => setEditingProject(project)}>Edit</button><button type="button" className="delete-btn" onClick={() => handleDelete(project._id)}>Delete</button></div>
    </div>)}
  </section>;
}
export default ProjectList;
