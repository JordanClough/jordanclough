import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
    return(
        <Router basename='/jordanclough'>
            <div className='app'>
                <SideBar />
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App
