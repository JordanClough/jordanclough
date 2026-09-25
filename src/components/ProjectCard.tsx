import type { Project } from "../data/projects";

function Media({ project }: { project: Project }) {
  if (project.tile === "portfolio") {
    return (
      <div className="flex h-full min-h-56 flex-col bg-gradient-to-br from-[#1c2a3a] to-[#0d0c0d] p-6" aria-hidden>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="h-3 w-2/3 rounded bg-sky-300/80" />
          <div className="h-2.5 w-full rounded bg-[#3a3a3a]" />
          <div className="h-2.5 w-5/6 rounded bg-[#3a3a3a]" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-14 rounded-lg border border-[#3a3a3a] bg-[#141414]" />
            <div className="h-14 rounded-lg border border-sky-300/40 bg-sky-300/10" />
            <div className="h-14 rounded-lg border border-[#3a3a3a] bg-[#141414]" />
          </div>
        </div>
        <span className="mt-auto pt-4 text-xs uppercase tracking-widest text-sky-300">
          React · TypeScript · Tailwind
        </span>
      </div>
    );
  }

  if (project.tile === "sql") {
    return (
      <div className="flex h-full min-h-56 flex-col justify-center bg-[#0f172a] p-6 font-mono text-sm" aria-hidden>
        <p><span className="text-sky-300">SELECT</span> <span className="text-white">name, pace</span></p>
        <p><span className="text-sky-300">FROM</span> <span className="text-white">activities</span></p>
        <p><span className="text-sky-300">WHERE</span> <span className="text-white">distance_km &gt; 5</span></p>
        <p><span className="text-sky-300">ORDER BY</span> <span className="text-white">date DESC;</span></p>
        <span className="mt-4 inline-block w-fit rounded bg-emerald-400/15 px-2 py-1 text-xs text-emerald-300">
          142 rows · 12ms
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-56 bg-black/30">
      <img
        src={project.image}
        alt={project.imageAlt ?? project.title}
        loading="lazy"
        decoding="async"
        className="aspect-video h-full w-full object-cover md:aspect-auto md:min-h-72"
      />
    </div>
  );
}

export default function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      className={`animate-rise grid gap-0 overflow-hidden rounded-2xl border border-[#3a3a3a] bg-[#141414] md:grid-cols-2 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Media project={project} />
      <div className="p-6 text-left">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mt-2 font-medium text-[#cfcfcf]">{project.description}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#bdbdbd]">
          {project.accomplishments.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-sky-300/90">
          {project.technologies.join(" · ")}
        </p>
      </div>
    </article>
  );
}
