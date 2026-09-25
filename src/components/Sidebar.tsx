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
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <header
        id="primary-nav"
        className={`fixed inset-y-0 left-0 z-40 flex w-[85%] max-w-xs flex-col border-r border-white/[0.06] bg-gradient-to-b from-[#1b1b1b] to-[#121212] px-5 py-6 transition-transform duration-300 lg:static lg:inset-auto lg:w-72 lg:max-w-none lg:shrink-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-lg font-black text-black shadow-lg shadow-sky-500/20">
              JC
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-bold tracking-tight">Jordan Clough</h1>
              <p className="mt-0.5 text-[11px] uppercase tracking-widest text-[#8c8b8c]">
                Software Developer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg bg-[#2a2a2a] px-3 py-2 text-lg leading-none lg:hidden"
          >
            ✕
          </button>
        </div>

        <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to full time roles
        </span>

        <nav aria-label="Primary" className="mt-8 w-full flex-1">
          <ul className="space-y-1.5">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `relative flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-[#bdbdbd] hover:bg-white/[0.04] hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute left-1.5 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full transition-colors ${
                          isActive ? "bg-sky-400" : "bg-transparent"
                        }`}
                      />
                      <span className="pl-3">{l.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 w-full rounded-xl bg-[#d9d9d9] px-4 py-3 text-center text-base font-bold text-black transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-white"
        >
          Download Resume
        </a>
      </header>
    </>
  );
}
