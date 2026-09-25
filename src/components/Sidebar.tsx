import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const resumeUrl = `${import.meta.env.BASE_URL}Resume_Jordan_Clough.pdf`;

  return (
    <>
      {/* mobile scrim */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <header
        id="primary-nav"
        className={`fixed inset-y-0 left-0 z-40 flex w-[85%] max-w-xs flex-col bg-[#1a1a1a] px-5 py-6 transition-transform duration-300 lg:static lg:inset-auto lg:w-72 lg:max-w-none lg:shrink-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Jordan Clough</h1>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#8c8b8c] lg:text-sm">
              Software Developer
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg bg-[#2a2a2a] px-3 py-2 text-lg leading-none lg:hidden"
          >
            ✕
          </button>
        </div>

        <nav aria-label="Primary" className="mt-10 w-full flex-1">
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-center text-lg transition-colors ${
                      isActive
                        ? "bg-[#3a3a3a] text-white"
                        : "text-[#d9d9d9] hover:bg-[#262626]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 w-full rounded-xl bg-[#d9d9d9] px-4 py-3 text-center text-lg font-bold text-black transition-transform hover:scale-[1.02]"
        >
          Download Resume
        </a>
      </header>
    </>
  );
}
