import { useState } from "react";
import Seo from "../components/Seo";
import EmailIcon from "../assets/email-icon.svg?react";
import PhoneIcon from "../assets/phone-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";

const EMAIL = "jordanclough10@gmail.com";
const PHONE = "778-689-3007";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 text-center">
      <Seo title="Contact · Jordan Clough" description="Reach Jordan Clough by email, phone, or LinkedIn." />
      <h1 className="text-4xl font-bold tracking-tight">Reach Out</h1>
      <p className="mt-2 text-sm text-[#8c8b8c]">Based in Greater Vancouver, BC · Open to full time roles</p>

      <div className="mt-8 space-y-3 text-left">
        <a href={`mailto:${EMAIL}`} className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#181818] to-[#121212] px-6 py-4 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-sky-400/30">
          <span className="text-sm font-bold tracking-widest text-[#8c8b8c] group-hover:text-sky-300">EMAIL</span>
          <span className="truncate pl-4">{EMAIL}</span>
        </a>
        <a href={`tel:${PHONE.replaceAll("-", "")}`} className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#181818] to-[#121212] px-6 py-4 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-sky-400/30">
          <span className="text-sm font-bold tracking-widest text-[#8c8b8c] group-hover:text-sky-300">PHONE</span>
          <span className="pl-4">{PHONE}</span>
        </a>
        <button
          onClick={copyEmail}
          className="w-full rounded-2xl bg-sky-400 px-6 py-3 font-bold text-black shadow-lg shadow-sky-500/20 transition-[transform,background-color] duration-200 hover:scale-[1.01] hover:bg-sky-300"
        >
          {copied ? "Copied!" : "Copy email"}
        </button>
      </div>

      <footer className="mt-8 flex items-center justify-center gap-4">
        <a href={`mailto:${EMAIL}`} aria-label="Email" className="rounded-full border border-[#3a3a3a] bg-[#232323] p-3 transition-colors hover:bg-[#333]">
          <EmailIcon className="h-6 w-6 brightness-0 invert" />
        </a>
        <a href={`tel:${PHONE.replaceAll("-", "")}`} aria-label="Phone" className="rounded-full border border-[#3a3a3a] bg-[#232323] p-3 transition-colors hover:bg-[#333]">
          <PhoneIcon className="h-6 w-6 brightness-0 invert" />
        </a>
        <a href="https://www.linkedin.com/in/jordan-clough101" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="rounded-full border border-[#3a3a3a] bg-[#232323] p-3 transition-colors hover:bg-[#333]">
          <LinkedinIcon className="h-6 w-6 brightness-0 invert" />
        </a>
      </footer>
    </main>
  );
}
