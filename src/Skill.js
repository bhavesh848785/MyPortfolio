import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Bootstrap", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "Communication", level: "Advanced" },
    { name: "Leadership", level: "Advanced" },
  ];

  const skillStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const skillCardStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "15px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
  };

  return (
    <div className="skills" style={{ marginTop: "10px" }}>
      <h1 style={{ paddingTop: "30px", color: "black" }}>Skills</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%" }} />
      <div style={skillStyle}>
        {skills.map((skill) => (
          <div key={skill.name} style={skillCardStyle}>
            <h4>{skill.name}</h4>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
