import { useState } from "react";
import Seo from "../components/Seo";
import EmailIcon from "../assets/email-icon.svg?react";
import PhoneIcon from "../assets/phone-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";

const EMAIL = "jordan_clough@sfu.ca";
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
      <Seo title="Contact — Jordan Clough" description="Reach Jordan Clough by email, phone, GitHub, or LinkedIn." />
      <h1 className="text-4xl font-bold">Reach out</h1>
      <p className="mt-2 text-[#bdbdbd]">Fastest: email or LinkedIn. No forms, no spam traps.</p>
      <p className="mt-1 text-sm text-[#8c8b8c]">Based in Greater Vancouver, BC · Open to internships and new-grad roles</p>

      <div className="mt-8 space-y-3 text-left">
        <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-2xl border border-[#3a3a3a] bg-[#141414] px-6 py-4 transition-transform hover:scale-[1.01]">
          <span className="font-bold tracking-widest">EMAIL</span>
          <span>{EMAIL}</span>
        </a>
        <a href={`tel:${PHONE.replaceAll("-", "")}`} className="flex items-center justify-between rounded-2xl border border-[#3a3a3a] bg-[#141414] px-6 py-4 transition-transform hover:scale-[1.01]">
          <span className="font-bold tracking-widest">PHONE</span>
          <span>{PHONE}</span>
        </a>
        <button
          onClick={copyEmail}
          className="w-full rounded-2xl bg-[#d9d9d9] px-6 py-3 font-bold text-black transition-transform hover:scale-[1.01]"
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
        <a href="https://github.com/JordanClough" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="rounded-full border border-[#3a3a3a] bg-[#232323] p-3 transition-colors hover:bg-[#333]">
          <GithubIcon className="h-6 w-6 brightness-0 invert" />
        </a>
        <a href="https://www.linkedin.com/in/jordan-clough101" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="rounded-full border border-[#3a3a3a] bg-[#232323] p-3 transition-colors hover:bg-[#333]">
          <LinkedinIcon className="h-6 w-6 brightness-0 invert" />
        </a>
      </footer>
    </main>
  );
}
