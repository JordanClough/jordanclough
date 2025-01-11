import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (sidebarRef.current) {
            sidebarRef.current.classList.toggle("open");
        }
    };

    const location = useLocation();

    useEffect(() => {
        // Close the menu when the route changes
        setMenuOpen(false);
        if (sidebarRef.current) {
            sidebarRef.current.classList.remove("open");
        }
    }, [location]);

    return (
        <div className='app'>
            <div ref={sidebarRef}>
                <SideBar className={menuOpen ? "open" : ""} />
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                {menuOpen ? "✕" : "☰"}
            </button>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router basename='/jordanclough'>
            <App />
        </Router>
    );
}

export default AppWrapper;