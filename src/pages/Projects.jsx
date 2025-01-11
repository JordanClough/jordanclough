import ExoCover from "../assets/project_photos/tessTelescope.webp";

function Projects(){
    const projects = [
        {
            title: "Exoplanet Machine Learning Classifer",
            desc: "A machine learning model that classifies exoplanets from NASA’s TESS telescope.",
            techlogies: "Python, TensorFlow, PyTorch, Scikit-learn, Matplotlib",
            img: ExoCover,
        },
        {
            title: "Fitness Tracker IOS App",
            desc: "This application tracks you",
            techlogies: "Swift, SwiftUI",
            img: ExoCover,
        },
        {
            title: "Slide 3",
            desc: "Some description here",
            techlogies: "Tech stack info",
            img: ExoCover,
        },
        {
            title: "Slide 3",
            desc: "Some description here",
            techlogies: "Tech stack info",
            img: ExoCover,
        },
    ];
    return(
        <main className="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className={`project ${index % 2 === 0 ? "left" : "right"}`}>
                        <img src={project.img} alt={project.title} className="project-img" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                            <p><strong>Technologies:</strong> {project.techlogies}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
export default Projects