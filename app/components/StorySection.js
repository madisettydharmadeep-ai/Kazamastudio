import { STORY_CARDS } from "../data";

const aestheticImages = [
  "https://i.pinimg.com/736x/35/68/2b/35682b83453c0ce89f81b0a6d0f7ae1b.jpg",
  "https://i.pinimg.com/1200x/c5/44/05/c544057ace0b71d4955cf305d3593a23.jpg",
  "https://i.pinimg.com/736x/42/4d/be/424dbe3fd87e88c20738334b5a68565a.jpg",
];

const peekAnimals = ["🐱", "🐻", "🦊"];

export default function StorySection() {
  return (
    <section
      id="story"
      className="mx-auto max-w-6xl px-5 py-12 sm:py-20"
      style={{ background: "#faf8f4", borderRadius: "1rem" }}
    >
      <style>{`
        .peek-animal {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%) translateY(16px);
          font-size: 26px;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
          z-index: 10;
          filter: drop-shadow(0 2px 4px rgba(44,36,32,0.15));
        }
        .story-card:hover .peek-animal {
          opacity: 1;
          transform: translateX(-50%) translateY(0px);
        }
        .story-card {
          position: relative;
        }
      `}</style>

      {/* heading */}
      <div className="mb-12">
        <p
          className="text-lg mb-2"
          style={{ fontFamily: "'Caveat', cursive", color: "#b07d5c" }}
        >
          ✦ a bit about me
        </p>
        <h2
          className="text-4xl sm:text-5xl leading-tight"
          style={{ fontFamily: "'Lora', serif", fontWeight: 400, color: "#2c2420" }}
        >
          AI models, cozy code,
          <br />
          and <em style={{ color: "#b07d5c" }}>hometown peace.</em>
        </h2>
      </div>

      {/* cards */}
      <div className="grid gap-6 md:grid-cols-3 items-start">
        {STORY_CARDS.map((card, index) => (
          <article
            key={card.title}
            className="story-card relative flex flex-col overflow-visible rounded-xl"
            style={{
              background: "#fffdf9",
              border: "1px solid #ede8df",
              marginTop: index === 1 ? "1.5rem" : index === 2 ? "-0.5rem" : "0",
            }}
          >
            {/* peeking animal */}
            <span className="peek-animal">{peekAnimals[index]}</span>

            {/* image with squiggle mask */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={aestheticImages[index]}
                alt=""
                className="w-full object-cover"
                style={{ height: "170px", display: "block" }}
              />
              <svg
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  width: "100%",
                }}
              >
                <path
                  d="M0,10 Q50,0 100,10 T200,10 T300,10 T400,10 L400,20 L0,20 Z"
                  fill="#fffdf9"
                />
              </svg>
            </div>

            {/* decorative mark */}
            <span
              className="absolute top-3 right-4"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "13px",
                color: "#c9a98a",
                opacity: 0.75,
              }}
            >
              {["✧", "✦", "✶"][index]}
            </span>

            {/* content */}
            <div className="p-5 flex flex-col flex-1">
              <p
                className="text-sm mb-1"
                style={{ fontFamily: "'Caveat', cursive", color: "#b07d5c" }}
              >
                {card.eyebrow}
              </p>

              <h3
                className="text-xl leading-snug mb-3"
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  color: "#2c2420",
                }}
              >
                {card.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#6b5d54", fontWeight: 300 }}
              >
                {card.copy}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "#f0ebe2", color: "#8a6d5b" }}
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