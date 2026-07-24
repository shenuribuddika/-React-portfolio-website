function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "MySQL",
    "Git",
    "GitHub",
    "Bootstrap"
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;