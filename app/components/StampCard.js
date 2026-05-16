import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <a
      href={project.url}
      target={project.url?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group block h-full"
    >
      <article
        className="relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/60 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/11] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />

          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* top meta */}
          <div className="absolute left-5 top-5">
            <div
              className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-700 backdrop-blur-md"
            >
              {project.status}
            </div>
          </div>

          {/* floating arrow */}
          <div
            className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition duration-300 group-hover:scale-110"
          >
            <ArrowUpRight size={18} />
          </div>

          {/* title on image */}
          <div className="absolute bottom-6 left-6">
            <h3
              className="serif-display text-4xl leading-none text-white drop-shadow-sm"
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-5 p-6">
          <p
            className="text-sm leading-relaxed text-slate-600"
          >
            {project.desc}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400"
            >
              {project.meta}
            </span>
          </div>
        </div>

        {/* subtle tint glow */}
        <div
          className={`
            pointer-events-none absolute inset-0 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100
            ${
              index % 2 === 0
                ? "bg-pink-100/20"
                : "bg-blue-100/20"
            }
          `}
        />
      </article>
    </a>
  );
}