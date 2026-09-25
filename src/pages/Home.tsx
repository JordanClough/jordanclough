import { Link } from "react-router-dom";
import BentoCard from "../components/BentoCard";
import Seo from "../components/Seo";
import activityPhoto from "../assets/project_photos/postactiv.webp";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <Seo
        title="Jordan Clough — Software Developer"
        description="Portfolio of Jordan Clough, software developer: projects, skills, contact."
      />
      <p className="text-sm uppercase tracking-widest text-[#8c8b8c]">Portfolio</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
        Welcome — I build mobile, ML, and web.
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-[#bdbdbd]">
        I&apos;m Jordan Clough, a CS student at SFU and software developer. Explore
        projects, skills, and ways to reach me.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/projects" className="rounded-xl bg-sky-400 px-5 py-2.5 font-bold text-black transition-transform hover:scale-[1.03]">
          View projects
        </Link>
        <Link to="/contact" className="rounded-xl border border-[#3a3a3a] bg-[#1c1c1c] px-5 py-2.5 font-bold text-white transition-colors hover:bg-[#2a2a2a]">
          Get in touch
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-6">
        <BentoCard title="3+" text="Years of personal building" className="md:col-span-2" />
        <BentoCard
          title="Fitness Tracker"
          text="iOS app with real-time metrics and post-activity insights."
          linkTo="/projects"
          className="md:col-span-4 md:row-span-2"
        >
          <img
            src={activityPhoto}
            alt="Fitness tracker activity view"
            loading="lazy"
            decoding="async"
            className="mt-4 aspect-video w-full rounded-xl object-cover object-top"
          />
          <span className="mt-3 inline-block font-bold text-sky-300">View projects →</span>
        </BentoCard>
        <BentoCard title="SFU" text="B.S. Computer Science in progress" className="md:col-span-2" />
        <BentoCard title="82" text="Credits completed" className="md:col-span-2" />
        <BentoCard title="Skills" text="TypeScript, React, Swift, Python, SQL and more." linkTo="/skills" className="md:col-span-2">
          <span className="mt-3 inline-block font-bold text-sky-300">Browse skills →</span>
        </BentoCard>
        <BentoCard title="Contact" text="Email, phone, GitHub, LinkedIn — no forms." linkTo="/contact" className="md:col-span-2">
          <span className="mt-3 inline-block font-bold text-sky-300">Say hi →</span>
        </BentoCard>
      </div>
    </main>
  );
}
