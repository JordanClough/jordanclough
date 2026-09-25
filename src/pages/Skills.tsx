import Seo from "../components/Seo";
import SkillHex from "../components/SkillHex";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
      <Seo
        title="Skills — Jordan Clough"
        description="Languages and tools: TypeScript, React, Swift, Python, SQL and more."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="mx-auto mt-2 max-w-xl text-[#bdbdbd]">
          {skills.length} languages and tools I build with — brand icons on white tiles so
          nothing vanishes on dark.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {skills.map((s) => (
          <SkillHex key={s.label} skill={s} />
        ))}
      </ul>
    </main>
  );
}
