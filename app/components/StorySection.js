import { STORY_CARDS } from "../data";

const aestheticImages = [
  "https://i.pinimg.com/736x/35/68/2b/35682b83453c0ce89f81b0a6d0f7ae1b.jpg",
  "https://i.pinimg.com/1200x/c5/44/05/c544057ace0b71d4955cf305d3593a23.jpg",
  "https://i.pinimg.com/736x/42/4d/be/424dbe3fd87e88c20738334b5a68565a.jpg",
];

export default function StorySection() {
  return (
    <section
      id="story"
      className="mx-auto max-w-6xl px-5 py-0 mb-20 sm:mb-0 sm:py-20"
    >
      {/* heading */}
      <div className="mb-10 sm:mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            A bit about me
          </p>

          <h2 className="serif-display mt-3 text-3xl sm:text-5xl leading-[0.95] text-slate-950 sm:text-6xl">
            AI models, cozy code,
            <br />
            and hometown peace.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          I'm an AI/ML engineer who loves untangling complex algorithms by day, and crafting aesthetic, indie web projects by night.
        </p>
      </div>

      {/* cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {STORY_CARDS.map((card, index) => (
          <article
            key={card.title}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200/70 bg-[#fcfcfc] p-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
          >
            {/* image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aestheticImages[index]}
                alt=""
                className="
                  h-52 w-full object-cover
                  transition duration-500
                  group-hover:scale-[1.03]
                "
              />

              {/* soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* content */}
            <div className="mt-5 flex flex-1 flex-col">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {card.eyebrow}
              </p>

              <h3 className="serif-display mt-3 text-3xl leading-none text-slate-950">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {card.copy}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}