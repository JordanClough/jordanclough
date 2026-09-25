import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BentoCardProps {
  title: string;
  text: string;
  eyebrow?: string;
  linkTo?: string;
  children?: ReactNode;
  className?: string;
}

export default function BentoCard({
  title,
  text,
  eyebrow,
  linkTo,
  children,
  className = "",
}: BentoCardProps) {
  const cls = `group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#181818] to-[#121212] p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-sky-400/30 hover:shadow-xl hover:shadow-black/40 ${className}`;

  const body = (
    <>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1.5 text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-2 text-[#bdbdbd]">{text}</p>
      {children}
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={cls} aria-label={`${title}: ${text}`}>
        {body}
      </Link>
    );
  }

  return <div className={cls}>{body}</div>;
}
