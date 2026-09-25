import { Link } from "react-router-dom";
import BentoCard from "../components/BentoCard";
import Seo from "../components/Seo";
import activityPhoto from "../assets/project_photos/postactiv.webp";

const EXPERIENCE_START = new Date(2022, 0, 1);

function getExperienceYears(now = new Date()): number {
  let years = now.getFullYear() - EXPERIENCE_START.getFullYear();
  const beforeAnniversary =
    now.getMonth() < EXPERIENCE_START.getMonth() ||
    (now.getMonth() === EXPERIENCE_START.getMonth() &&
      now.getDate() < EXPERIENCE_START.getDate());
  if (beforeAnniversary) years -= 1;
  return Math.max(0, years);
}

const PROFESSIONAL_START = new Date(2025, 4, 1);

function getProfessionalMonths(now = new Date()): number {
  let months =
    (now.getFullYear() - PROFESSIONAL_START.getFullYear()) * 12 +
    (now.getMonth() - PROFESSIONAL_START.getMonth());
  if (now.getDate() < PROFESSIONAL_START.getDate()) months -= 1;
  return Math.max(0, months);
}

export default function Home() {
  const experienceYears = getExperienceYears();
  const professionalMonths = getProfessionalMonths();
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <Seo
        title="Jordan Clough · Software Developer"
        description="Portfolio of Jordan Clough, software developer: projects, skills, contact."
      />
      <section className="animate-rise">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Portfolio
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          I build{" "}
          <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400 bg-clip-text text-transparent">
            mobile, ML, and web
          </span>
          .
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#bdbdbd]">
          I&apos;m Jordan Clough, a Computing Science graduate from Simon Fraser
          University based in Greater Vancouver. Explore my projects, skills, and ways
          to reach me.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-xl bg-sky-400 px-5 py-2.5 font-semibold text-black shadow-lg shadow-sky-500/20 transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-sky-300"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-[#3a3a3a] bg-white/[0.04] px-5 py-2.5 font-semibold text-white transition-colors duration-200 hover:border-[#555] hover:bg-white/[0.09]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <div className="mt-10 grid gap-4 md:grid-cols-6">
        <BentoCard
          eyebrow="Professional Experience"
          title={`${professionalMonths} month${professionalMonths === 1 ? "" : "s"}`}
          text="Professional software experience since May 2025."
          className="md:col-span-2"
        />
        <BentoCard
          eyebrow="Featured project"
          title="Fitness Tracker"
          text="iOS app with real-time metrics and post-activity insights."
          linkTo="/projects"
          className="md:col-span-4 md:row-span-2"
        >
          <div className="mt-5 overflow-hidden rounded-xl border border-white/5">
            <img
              src={activityPhoto}
              alt="Fitness tracker activity view"
              loading="lazy"
              decoding="async"
              className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] md:h-72"
            />
          </div>
          <span className="mt-4 inline-block font-semibold text-sky-300">
            View projects →
          </span>
        </BentoCard>
        <BentoCard
          eyebrow="Education"
          title="BSc. Computing Science"
          text="Simon Fraser University · Greater Vancouver"
          className="md:col-span-2"
        />
        <BentoCard
          eyebrow="Experience"
          title={`${experienceYears}+ years`}
          text="Building personal and academic software end to end."
          className="md:col-span-2"
        />

        <BentoCard
          eyebrow="Toolkit"
          title="Skills"
          text="TypeScript, React, Swift, Python, SQL and more."
          linkTo="/skills"
          className="md:col-span-2"
        >
          <span className="mt-4 inline-block font-semibold text-sky-300">
            Browse skills →
          </span>
        </BentoCard>
        <BentoCard
          eyebrow="Contact"
          title="Say hello"
          text="Email, phone, and LinkedIn. No forms."
          linkTo="/contact"
          className="md:col-span-2"
        >
          <span className="mt-4 inline-block font-semibold text-sky-300">
            Get in touch →
          </span>
        </BentoCard>
      </div>
    </main>
  );
}
