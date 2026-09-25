import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import { projects } from "../data/projects";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState("All");

  const allTech = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.technologies)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTech = tech === "All" || p.technologies.includes(tech);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.join(" ").toLowerCase().includes(q);
      return matchesTech && matchesQuery;
    });
  }, [query, tech]);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <Seo title="Projects · Jordan Clough" description="ML, iOS, web, and database projects by Jordan Clough." />
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-[#bdbdbd]">{filtered.length} of {projects.length} shown</p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects or tech…"
          aria-label="Search projects"
          className="w-full rounded-xl border border-white/[0.07] bg-[#141414] px-4 py-3 outline-none transition-colors placeholder:text-[#777] focus:border-sky-400/50"
        />
        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          aria-label="Filter by technology"
          className="rounded-xl border border-white/[0.07] bg-[#141414] px-4 py-3 outline-none transition-colors focus:border-sky-400/50"
        >
          {allTech.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 space-y-6">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-xl border border-[#3a3a3a] bg-[#141414] p-6 text-center text-[#8c8b8c]">
            No projects match. Try clearing the search.
          </p>
        )}
      </div>
    </main>
  );
}
