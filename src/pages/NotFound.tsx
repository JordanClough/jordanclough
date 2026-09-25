import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3 text-[#bdbdbd]">That page doesn&apos;t exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-xl bg-[#d9d9d9] px-6 py-3 font-bold text-black">
        Go home
      </Link>
    </main>
  );
}
