const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("Database Connection Error:", err);
  });

// Routes
app.use("/api/projects", projectRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running...");
});

// Server
const PORT = process.env.PORT || 5000;

console.log("Reached app.listen");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
