import ExoCover from "../assets/project_photos/tessTelescopeSQ.png";
import skillsPhoto from "../assets/project_photos/Website.png";
import activityPhoto from "../assets/project_photos/postactiv.png";
import sqlPhoto from "../assets/project_photos/sqldataNew.png";

function Projects(){
    const projects = [
        {
            title: "Exoplanet Machine Learning Classifer",
            desc: "A machine learning model that classifies exoplanets from NASA’s TESS telescope.",
            acomplishment_statements: [
                "Developed a classifier to detect whether a planet orbiting a star was a false positive or a confirmed planet based on lightcurve data from NASA's TESS Space Telescope.",
                "Implemented and evaluated multiple classification models, including neural networks, to determine the most effective architecture for exoplanet detection.",
                "Automated the data ingestion and preprocessing pipeline for handling large-scale TESS lightcurve datasets.",
                "Preprocessed raw lightcurve data by removing noise and normalizing flux values to enhance data quality.",
            ],
            technologies: "Python, TensorFlow, PyTorch, Scikit-learn, Matplotlib",
            img: ExoCover,
        },
        {
            title: "Fitness Tracker IOS App",
            desc: "An iOS app that tracks users' fitness activities and provides detailed insights into their performance.",
            acomplishment_statements: [
                "Engineered an app for users to track their distance and speed so they can monitor crucial metrics in real time.",
                "Implemented intuitive user interfaces using SwiftUI to display detailed activity insights, including activity history, progress tracking, and visual map.",
                "Developed a post-activity analysis feature, enabling users to review and gain insights into their completed activities.",
                "Integrated Firebase to enable user authentication and store activity data securely in the cloud.",
            ],
            technologies: "Swift, SwiftUI",
            img: activityPhoto,
        },
        {
            title: "Personal Portfolio Website",
            desc: "A personal portfolio website to showcase your projects and skills. The one you are currently viewing.",
            acomplishment_statements: [
                "Designed an intuitive and iterative website to breathe life into a personal website to showcase skills and projects.",
                "Programmed a flexible front end using a framework that allows users to view the website from a multitude of devices including desktop and mobile screen sizes.",
                "Built reusable components in React to enhance code modularity and scalability.",
                "Added a contact form with email functionality using a serverless backend service.",
            ],
            technologies: "React, JavaScript, HTML, CSS",
            img: skillsPhoto,
        },
        {
            title: "Database GUI",
            desc: "A user-friendly GUI for interacting with a Microsoft SQL Server database.",
            acomplishment_statements: [
                "Developed an intuitive GUI that enables users to seamlessly sort, filter, search, and interact with data stored in a Microsoft SQL Server database.",
                "Integrated back-end database operations with a user-friendly front-end, ensuring efficient data manipulation while maintaining data integrity and validity.",
                "Enhanced responsiveness by optimizing SQL queries and ensuring efficient communication between the GUI and the database.",
                "Built-in data validation rules and assertions to prevent incorrect entries, ensuring the integrity of stored records.",
                "NOTE: Lost access to database so can't show the project photos",
            ],
            technologies: "Python, Tkinter, Microsoft SQL Server, SQL",
            img: sqlPhoto,
        },
    ];
    return(
        <main className="projects">
            <h1>PROJECTS</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className={`project ${index % 2 === 0 ? "left" : "right"}`}>
                        <img src={project.img} alt={project.title} className="project-img" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p className="desc">{project.desc}</p>
                            <ul>
                                {project.acomplishment_statements.map((statement, i) => (
                                <li key={i}>{statement}</li>
                                ))}
                            </ul>
                            <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
export default Projects