import { NavLink } from 'react-router-dom';

function SideBar() {
    const handleDownloadAndOpen = () => {
        const resumeDestination = "Resume_Jordan_Clough.pdf";
        window.open(resumeDestination, "_blank");
        
        const link = document.createElement("a");
        link.href = resumeDestination;
        link.download = resumeDestination;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <header className="sidebar">
            <h1>Jordan Clough</h1>
            <h2>Software Developer</h2>
            <nav>
                <ul>
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
            </nav>
            <button onClick={handleDownloadAndOpen} className="download-resume">
                        Download Resume
            </button>
        </header>
    );
}

export default SideBar;