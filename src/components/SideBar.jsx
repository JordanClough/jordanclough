import { NavLink } from 'react-router-dom';

function SideBar(){
    return(
        <header className="sidebar">
            <h1>Jordan Clough</h1>
            <h2>Software Developer</h2>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default SideBar