import { ArrowUpRight } from "lucide-react";
import { SIDE_WORKS } from "../data";

export default function SideWorks() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-12">
      <h2 className="serif-display mb-4 text-5xl font-semibold italic">
        Side Works
      </h2>
      <div className="divide-y divide-slate-300 border-y-2 border-slate-900">
        {SIDE_WORKS.map((item, index) => (
          <a
            key={item}
            href="#contact"
            className="flex items-center justify-between gap-4 py-4 transition hover:bg-white"
          >
            <span className="serif-display text-3xl font-semibold leading-tight text-slate-800">
              {item}
            </span>
            <span className="rounded-full bg-lime-600 px-3 py-1 text-sm font-bold text-white">
              {index === 0
                ? "Design Challenge"
                : index === 1
                  ? "Job Simulation"
                  : "Essay"}
            </span>
            <ArrowUpRight className="h-9 w-9 shrink-0" strokeWidth={1.8} />
          </a>
        ))}
      </div>
    </section>
  );
}
