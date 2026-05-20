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
        className="
          project-card
          relative flex h-full flex-col
          overflow-hidden rounded-[28px]
          border border-[#ece5dc]
          bg-[#fdfbf8]
        "
      >
        <style>{`
          .project-card {
            transition:
              transform .45s cubic-bezier(0.22,1,0.36,1),
              box-shadow .45s ease,
              border-color .45s ease;
          }

          .project-card:hover {
            transform:
              translateY(-10px)
              rotate(-0.8deg);

            box-shadow:
              0 30px 60px rgba(50,30,10,0.12),
              0 10px 30px rgba(50,30,10,0.06);

            border-color: #e6dacb;
          }

          .project-image {
            transition:
              transform 1.2s cubic-bezier(0.22,1,0.36,1),
              filter .7s ease;
          }

          .project-card:hover .project-image {
            transform: scale(1.08);
            filter: saturate(1.08);
          }

          .project-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                120deg,
                transparent 20%,
                rgba(255,255,255,0.35) 50%,
                transparent 80%
              );
            transform: translateX(-120%);
            transition: transform 1.2s ease;
            z-index: 30;
            pointer-events: none;
          }

          .project-card:hover::before {
            transform: translateX(120%);
          }

          .hover-note {
            opacity: 0;
            transform: translateY(10px);
            transition:
              opacity .35s ease,
              transform .35s ease;
          }

          .project-card:hover .hover-note {
            opacity: 1;
            transform: translateY(0);
          }

          .grain {
            position: absolute;
            inset: 0;
            opacity: 0.05;
            mix-blend-mode: soft-light;
            background-image:
              radial-gradient(circle at 20% 20%, black 1px, transparent 1px),
              radial-gradient(circle at 80% 30%, black 1px, transparent 1px),
              radial-gradient(circle at 50% 80%, black 1px, transparent 1px);
            background-size: 120px 120px;
            pointer-events: none;
          }
        `}</style>

        {/* IMAGE */}
        <div className="relative aspect-[16/11] overflow-hidden">
          {/* image */}
          <img
            src={project.image}
            alt={project.title}
            className="project-image h-full w-full object-cover"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f130c]/80 via-[#1f130c]/10 to-transparent" />

          {/* grain */}
          <div className="grain" />

          {/* floating label */}
          <div className="absolute left-5 top-5">
            <div
              className="
                rounded-full
                border border-white/20
                bg-white/10
                px-4 py-1.5
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-white
                backdrop-blur-md
              "
            >
              {project.status}
            </div>
          </div>

          {/* tiny timestamp */}
          <div
            className="
              absolute right-5 top-5
              text-[10px]
              text-white/60
              tracking-[0.25em]
            "
          >
            02:14 AM
          </div>

          {/* title */}
          <div className="absolute bottom-6 left-6">
            <h3
              className="
                serif-display
                text-4xl
                leading-none
                text-white
                drop-shadow-sm
              "
            >
              {project.title}
            </h3>

            {/* handwritten hover reveal */}
            <div
              className="
                hover-note
                mt-2
                text-sm
                text-white/70
              "
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              ↳ one of my favorite builds lately
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* desc */}
          <p
            className="
              text-[15px]
              leading-relaxed
              text-[#6e6258]
            "
          >
            {project.desc}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  bg-[#f2ece4]
                  px-3 py-1
                  text-[11px]
                  text-[#8b7766]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* footer */}
          <div className="mt-auto flex items-center justify-between pt-3">
            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-[#b09b88]
              "
            >
              {project.meta}
            </span>

            {/* handwritten link */}
            <div
              className="
                flex items-center gap-1
                text-sm
                text-[#8a6f5c]
                transition duration-300
                group-hover:translate-x-1
              "
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              open project
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* ambient glow */}
        <div
          className={`
            pointer-events-none absolute inset-0 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100
            ${index % 2 === 0 ? "bg-amber-100/20" : "bg-rose-100/20"}
          `}
        />
      </article>
    </a>
  );
}
