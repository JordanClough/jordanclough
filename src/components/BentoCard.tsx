import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BentoCardProps {
  title: string;
  text: string;
  linkTo?: string;
  children?: ReactNode;
  className?: string;
}

export default function BentoCard({ title, text, linkTo, children, className = "" }: BentoCardProps) {
  const cls = `rounded-2xl border border-[#3a3a3a] bg-[#141414] p-6 text-center transition-transform duration-200 hover:scale-[1.02] ${className}`;

  if (linkTo) {
    return (
      <Link to={linkTo} className={cls} aria-label={`${title} — ${text}`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-[#bdbdbd]">{text}</p>
        {children}
      </Link>
    );
  }

  return (
    <div className={cls}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-[#bdbdbd]">{text}</p>
      {children}
    </div>
  );
}
