import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Shell() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="flex h-dvh overflow-hidden bg-[#0d0c0d] text-[#d9d9d9]">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-[radial-gradient(900px_520px_at_60%_-15%,rgba(56,189,248,0.08),transparent)]">
        {!menuOpen && (
          <button
            className="fixed left-4 top-4 z-50 rounded-lg bg-[#2a2a2a] px-4 py-2 text-xl lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label="Open menu"
          >
            ☰
          </button>
        )}

        <div className="flex-1 pt-14 lg:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="border-t border-[#2a2a2a] px-6 py-6 text-center text-sm text-[#8c8b8c]">
          Jordan Clough · React + TypeScript portfolio ·{" "}
          <a href="https://www.linkedin.com/in/jordan-clough101" target="_blank" rel="noreferrer noopener" className="text-sky-300 hover:underline">LinkedIn</a>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}
