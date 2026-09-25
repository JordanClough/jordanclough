import type { Skill } from "../data/skills";

export default function SkillHex({ skill }: { skill: Skill }) {
  const { Icon, label, color } = skill;
  return (
    <li aria-label={label} className="hex">
      <Icon className="hex-icon" style={color ? { color } : undefined} aria-hidden />
      <span className="hex-label">{label}</span>
    </li>
  );
}
