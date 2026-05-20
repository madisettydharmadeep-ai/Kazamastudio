"use client";

import { useState } from "react";
import { Coffee, Headphones, Tv, Sparkles, Heart } from "lucide-react";

export default function CurrentlyCozy() {
  const [isPlaying, setIsPlaying] = useState(false);

  const items = [
    {
      id: 1,
      title: "One Piece",
      subtitle: "Weekend Binge",
      image:
        "https://i.pinimg.com/736x/14/67/d1/1467d185293ffc311aaa9ff48811c589.jpg",
      icon: <Tv size={14} />,
      tag: "Comfort Watch",
      note: "Kaizoku-ō ni naru otoko da",
      rotation: "-rotate-2",
      tapeRotation: "rotate-[3deg]",
    },
    {
      id: 2,
      title: "Kurzgesagt",
      subtitle: "Brain Food",
      image:
        "https://i.pinimg.com/1200x/29/76/2d/29762d4280b7502afca0e237b9977272.jpg",
      icon: <Sparkles size={14} />,
      tag: "Cozy Science",
      note: "existential crisis but aesthetic",
      rotation: "rotate-1",
      tapeRotation: "-rotate-[2deg]",
    },
    {
      id: 3,
      title: "Billions",
      subtitle: "Drama Night",
      image:
        "https://i.pinimg.com/1200x/9c/6f/87/9c6f87fd5ff849fdc8a2c9e2251cec13.jpg",
      icon: <Coffee size={14} />,
      tag: "Late Night",
      note: "pretending i understand finance",
      rotation: "rotate-2",
      tapeRotation: "rotate-[4deg]",
    },
  ];

  return (
    <section className="relative px-6 py-20 sm:px-12 flex flex-col items-center overflow-hidden">
      <style>{`
        .cozy-card {
          transform-style: preserve-3d;
          transition:
            transform 0.18s ease,
            box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .cozy-card:hover {
          box-shadow:
            0 30px 60px rgba(60,40,20,0.14),
            0 10px 25px rgba(60,40,20,0.08);
        }

        .cozy-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(255,255,255,0.45) 50%,
              transparent 80%
            );
          transform: translateX(-120%);
          transition: transform 1s ease;
          z-index: 20;
          pointer-events: none;
        }

        .cozy-card:hover::before {
          transform: translateX(120%);
        }

        .image-layer {
          transition:
            transform 0.7s cubic-bezier(0.22,1,0.36,1),
            filter 0.6s ease;
        }

        .cozy-card:hover .image-layer {
          transform: scale(1.08);
          filter: saturate(1.1);
        }

        .tape {
          transition: transform 0.35s ease;
        }

        .cozy-card:hover .tape {
          transform:
            translateX(-50%)
            rotate(-2deg)
            scale(1.04);
        }

        .secret-note {
          opacity: 0;
          transform: translateY(8px);
          transition:
            opacity 0.35s ease,
            transform 0.35s ease;
        }

        .cozy-card:hover .secret-note {
          opacity: 1;
          transform: translateY(0);
        }

        .dust {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,0.6);
          animation: floatDust 5s linear infinite;
        }

        @keyframes floatDust {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120px);
            opacity: 0;
          }
        }

        .vinyl-glow {
          animation: pulseGlow 2s ease infinite;
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 rgba(244,114,182,0.0); }
          50% { box-shadow: 0 0 35px rgba(244,114,182,0.18); }
          100% { box-shadow: 0 0 0 rgba(244,114,182,0.0); }
        }
      `}</style>

      {/* blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl" />
      </div>

      {/* header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-5">
          <Heart size={14} className="text-rose-400 fill-rose-100" />
          <span className="text-xs uppercase tracking-wider text-stone-500">
            Current Comforts
          </span>
        </div>

        <h2 className="text-5xl font-serif text-[#4a3f35]">
          Lately, I'm loving...
        </h2>
      </div>

      {/* grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full place-items-center">
        {items.map((item) => (
          <div
            key={item.id}
            onMouseMove={(e) => {
              const card = e.currentTarget;

              const rect = card.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const rotateY = (x / rect.width - 0.5) * 10;
              const rotateX = (y / rect.height - 0.5) * -10;

              card.style.transform = `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            }}
            className={`cozy-card relative bg-white p-3 pb-5 rounded-[28px] border border-[#f2ece4] ${item.rotation}`}
          >
            {/* floating particles */}
            <div className="dust top-20 left-8" />
            <div className="dust top-32 right-10 delay-1000" />

            {/* image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="image-layer w-full h-full object-cover"
              />

              {/* tag */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-sm">
                {item.icon}
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#5c4d42]">
                  {item.tag}
                </span>
              </div>

              {/* handwritten stamp */}
              <div className="absolute bottom-3 right-3 text-[11px] text-white/80 font-mono rotate-[-8deg]">
                02:17 AM
              </div>
            </div>

            {/* content */}
            <div className="px-2">
              <h3 className="text-lg font-bold text-[#4a3f35] mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-[#9a8c7e] mb-3">{item.subtitle}</p>

              <div className="secret-note border-t border-dashed border-[#eadfd1] pt-3">
                <p className="text-sm text-[#a18472] italic">"{item.note}"</p>
              </div>
            </div>

            {/* tape */}
            {/* <div
              className={`tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-amber-100/90 border border-[#e8dfd1] shadow-sm ${item.tapeRotation}`}
            /> */}
          </div>
        ))}

        {/* music card */}
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="cozy-card relative bg-white p-3 pb-5 rounded-[28px] border border-[#f2ece4] -rotate-1 cursor-pointer"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-[#fdf8f5] flex items-center justify-center">
            <div className="absolute top-3 left-3 z-20 bg-white/90 px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-sm">
              <Headphones size={14} />
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5c4d42]">
                On Repeat
              </span>
            </div>

            <div
              className={`relative w-[65%] aspect-square rounded-full bg-black flex items-center justify-center border-[10px] border-[#1c1917]
              ${isPlaying ? "animate-[spin_4s_linear_infinite] vinyl-glow" : ""}
              `}
            >
              <div className="absolute inset-5 rounded-full border border-white/10" />
              <div className="absolute inset-10 rounded-full border border-white/10" />

              <div className="w-[34%] aspect-square rounded-full overflow-hidden border border-black">
                <img
                  src="https://i.pinimg.com/736x/aa/31/0a/aa310a201d08c0887fdf923e025de074.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* music visualizer */}
            {isPlaying && (
              <div className="absolute bottom-4 flex gap-1">
                <span className="w-1 h-4 rounded-full bg-rose-300 animate-pulse" />
                <span className="w-1 h-6 rounded-full bg-amber-300 animate-pulse delay-75" />
                <span className="w-1 h-3 rounded-full bg-stone-300 animate-pulse delay-150" />
              </div>
            )}
          </div>

          <div className="px-2">
            <h3 className="text-lg font-bold text-[#4a3f35]">Counting Stars</h3>

            <p className="text-sm text-[#9a8c7e]">OneRepublic</p>

            <div className="secret-note border-t border-dashed border-[#eadfd1] pt-3 mt-3">
              <p className="text-sm text-[#a18472] italic">
                "this song feels like old youtube."
              </p>
            </div>
          </div>

          {/* <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-amber-100 border border-[#e8dfd1] shadow-sm rotate-[3deg]" /> */}
        </div>
      </div>
    </section>
  );
}
