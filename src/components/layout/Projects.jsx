import projects from "../../assets/generate/projects.json";

export default function Projects(){
    return(
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2>$ ls /projects</h2>
                </div>

                <div className="projects-wrapper">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-link"
                        >
                            <div className="project-card">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image-img" />
                                </div>

                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    
                                    <div className="project-roles">
                                        {project.job.map((role, idx) => (
                                            <span key={idx} className="role-badge">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

