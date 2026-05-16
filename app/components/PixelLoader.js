export default function PixelLoader() {
  const images = [
    "https://i.pinimg.com/736x/24/2c/1a/242c1a960184aff25b7d367399b24294.jpg",
    "https://i.pinimg.com/736x/a0/7b/d1/a07bd1befcf661520f4902f471359982.jpg",
    "https://i.pinimg.com/736x/58/e5/de/58e5decaf69b3f073fc667b24b0bd939.jpg",
    "https://i.pinimg.com/736x/41/85/67/4185673ca1ac9363b65adb9c0c92cf3f.jpg",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f8f6f2]">
      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8efe9] opacity-80 blur-3xl" />

      {/* subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* floating images */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute rounded-[28px] object-cover shadow-[0_20px_50px_rgba(15,23,42,0.12)] opacity-0 animate-[floatIn_1.4s_ease_forwards] ${index === 0 ? "left-[10%] top-[10%] h-24 w-24  sm:h-40 sm:w-40 rotate-[-8deg]" : index === 1 ? "right-[10%] top-[10%] h-24 w-24 sm:h-40 sm:w-40 rotate-[6deg]" : index === 2 ? "bottom-[10%] left-[10%] h-24 w-24 sm:h-40 sm:w-40 rotate-[7deg]" : "bottom-[10%] right-[10%] h-24 w-24 sm:h-40 sm:w-40 rotate-[-6deg]"}`}
            style={{
              animationDelay: `${index * 500}ms`,
            }}
          />
        ))}
      </div>

      {/* center content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-slate-400">
          Kazama Studio
        </p>

        <h1
          className="serif-display max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] text-slate-900 sm:text-7xl md:text-8xl"
        >
          loading a tiny
          <br />
          cozy universe
        </h1>

        {/* loader */}
        <div className="mt-14 w-full max-w-[240px]">
          <div className="h-[3px] overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full w-1/3 rounded-full bg-slate-800 animate-[loader_2s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}