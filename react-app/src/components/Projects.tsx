const projects = [
  {
    id: 1,
    name: "EZ commerce",
    link: "https://github.com/ChelseaOkoroji/CMSC447Proj",
    description: "An e-commerce webapp made for college students",
  },

  {
    id: 2,
    name: "Personal Website",
    link: "https://github.com/ChelseaOkoroji/CMSC447Proj",
    description: "Website created in React + Typescript + Vite",
  },

  {
    id: 3,
    name: "Dr Diagnosis",
    link: "https://github.com/jakinmol8637/AI4ALL-Apply-AI-Project",
    description: "Utilizes three different ML classifers to predict chances of Heart disease or diabetes ",
  },
  {
    id: 4,
    name: "Bone Fracture Detection",
    link: "https://github.com/sangeetavarri/AI4ALL_Bone_Fracture_Classification",
    description: "Utilized YOLOv8 to identify Bone Fractures.",
  },

  {
    id: 5,
    name: "Bouncy Ball (comming soon)",
    link: "coming soon",
    description: "A simple bouncy ball simulation using only SDL-2 and C",
  },
];



function Projects() {
  return (
    <div>
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <h3>{project.name}</h3>
              </div>
              {/* Back Side */}
              <div className="card-back">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;