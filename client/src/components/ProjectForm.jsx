import { useState, useEffect } from "react";
import { addProject, updateProject } from "../services/projectService";

function ProjectForm({ fetchProjects, editingProject, setEditingProject }) {
  const [formData, setFormData] = useState({ title: "", description: "", technologies: "", githubLink: "" });
  useEffect(() => { if (editingProject) setFormData({ title: editingProject.title, description: editingProject.description, technologies: editingProject.technologies, githubLink: editingProject.githubLink }); }, [editingProject]);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => { e.preventDefault(); if (editingProject) { await updateProject(editingProject._id, formData); setEditingProject(null); } else await addProject(formData); setFormData({ title: "", description: "", technologies: "", githubLink: "" }); fetchProjects(); };
  return <form className="project-form admin-card" onSubmit={handleSubmit}>
    <h2>{editingProject ? "Update project" : "Add a project"}</h2>
    <input type="text" name="title" placeholder="Project title" value={formData.title} onChange={handleChange} />
    <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
    <input type="text" name="technologies" placeholder="Technologies" value={formData.technologies} onChange={handleChange} />
    <input type="url" name="githubLink" placeholder="GitHub link" value={formData.githubLink} onChange={handleChange} />
    <button type="submit">{editingProject ? "Update Project" : "Add Project"}</button>
  </form>;
}
export default ProjectForm;
