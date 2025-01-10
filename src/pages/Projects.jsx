import ProjectSlide from "../components/ProjectSlide";
import ExoCover from "../assets/project_photos/tessTelescope.webp";
import { useState } from "react";
function Projects(){
    const projects = [
        {
            title: "Exoplanet Machine Learning Classifer",
            desc: "A machine learning model that classifies exoplanets from NASA’s TESS telescope.",
            techlogies: "Python, TensorFlow, PyTorch, Scikit-learn, Matplotlib",
            img: ExoCover,
            button_title: "Exoplanet Classifier",
        },
        {
            title: "Fitness Tracker IOS App",
            desc: "This application tracks you",
            techlogies: "Swift, SwiftUI",
            img: ExoCover,
            button_title: "Fitness Tracker",
        },
        {
            title: "Slide 3",
            desc: "Some description here",
            techlogies: "Tech stack info",
            img: ExoCover,
            button_title: "Database GUI",
        },
        {
            title: "Slide 3",
            desc: "Some description here",
            techlogies: "Tech stack info",
            img: ExoCover,
            button_title: "React Portfolio",
        },
    ];

    const [activeProject, setActiveProject] = useState(0);
    return(
        <main className="projects">
            <ProjectSlide 
                title={projects[activeProject].title}
                desc={projects[activeProject].desc}
                techlogies={projects[activeProject].techlogies}
                img={projects[activeProject].img}
                />
            <div className="projects-nav">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={index === activeProject ? "active" : ""}
                    >
                        {project.button_title}
                    </button>
                ))}
            </div>
        </main>
    );
}
export default Projects