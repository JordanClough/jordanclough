import type { Skill } from "../data/skills";

export default function SkillHex({ skill }: { skill: Skill }) {
  const { Icon, label } = skill;
  return (
    <li
      aria-label={label}
      className="group flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#242424] to-[#1a1a1a] text-center transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:from-[#2f2f2f] hover:to-[#232323] sm:h-28 sm:w-28 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-lg shadow-black/50 sm:h-11 sm:w-11">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
      </span>
      <span className="px-1 text-[11px] font-semibold leading-tight sm:text-xs">{label}</span>
    </li>
  );
}
