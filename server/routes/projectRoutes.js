const express = require("express");
const router = express.Router();

const {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// GET all projects
router.get("/", getProjects);

// POST new project
router.post("/", addProject);

// UPDATE project
router.put("/:id", updateProject);

// DELETE project
router.delete("/:id", deleteProject);

module.exports = router;