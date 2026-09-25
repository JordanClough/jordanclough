import Seo from "../components/Seo";
import SkillHex from "../components/SkillHex";
import { skills } from "../data/skills";

const rows = [skills.slice(0, 4), skills.slice(4, 9), skills.slice(9)];

export default function Skills() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-5xl flex-col items-center justify-center px-6 py-10">
      <Seo
        title="Skills · Jordan Clough"
        description="Languages and tools: TypeScript, React, Swift, Python, SQL and more."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
        <p className="mx-auto mt-4 max-w-xl text-[#bdbdbd]">
          {skills.length} languages, frameworks, and tools I reach for when building,
          from iOS and machine learning to full-stack web.
        </p>
      </div>

      <ul className="hex-grid mt-12 md:mt-16">
        {rows.map((row, i) => (
          <li key={i} className="hex-row">
            <ul>
              {row.map((s) => (
                <SkillHex key={s.label} skill={s} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
