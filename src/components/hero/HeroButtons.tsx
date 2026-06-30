import { Link } from "react-router-dom";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <Link
        to="/initiatives"
        className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Explore Platform
      </Link>

      <Link
        to="/insights"
        className="rounded-full border border-white/20 px-8 py-4 text-white transition hover:border-yellow-500 hover:text-yellow-500"
      >
        Intelligence Reports
      </Link>
    </div>
  );
}