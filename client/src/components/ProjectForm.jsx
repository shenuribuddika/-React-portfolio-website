import { useState, useEffect } from "react";
import { addProject, updateProject } from "../services/projectService";

function ProjectForm({ fetchProjects, editingProject, setEditingProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
  });

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title,
        description: editingProject.description,
        technologies: editingProject.technologies,
        githubLink: editingProject.githubLink,
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingProject) {
      await updateProject(editingProject._id, formData);
      setEditingProject(null);
    } else {
      await addProject(formData);
    }

    setFormData({
      title: "",
      description: "",
      technologies: "",
      githubLink: "",
    });

    fetchProjects();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="technologies"
        placeholder="Technologies"
        value={formData.technologies}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="githubLink"
        placeholder="GitHub Link"
        value={formData.githubLink}
        onChange={handleChange}
      />

      <br />
      <br />

      <button type="submit">
        {editingProject ? "Update Project" : "Add Project"}
      </button>
    </form>
  );
}

export default ProjectForm;
