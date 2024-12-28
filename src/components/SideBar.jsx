import { NavLink } from 'react-router-dom';

function SideBar(){
    return(
        <header className="sidebar">
            <h1>Jordan Clough</h1>
            <h2>Software Developer</h2>
            <nav>
                <ul>
                    <li><NavLink to="/" exact className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/skills" className={({isActive}) => isActive ? 'active' : ''}>Skills</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default SideBar