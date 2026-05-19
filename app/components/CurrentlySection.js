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
      image: "https://i.pinimg.com/736x/14/67/d1/1467d185293ffc311aaa9ff48811c589.jpg",
      icon: <Tv size={14} />,
      tag: "Comfort Watch",
      rotation: "-rotate-2",
      tapeRotation: "rotate-[3deg]"
    },
    {
      id: 2,
      title: "Kurzgesagt",
      subtitle: "Brain Food",
      image: "https://i.pinimg.com/1200x/29/76/2d/29762d4280b7502afca0e237b9977272.jpg",
      icon: <Sparkles size={14} />,
      tag: "Cozy Science",
      rotation: "rotate-1",
      tapeRotation: "-rotate-[2deg]"
    },
    {
      id: 3,
      title: "Billions",
      subtitle: "Drama Night",
      image: "https://i.pinimg.com/1200x/9c/6f/87/9c6f87fd5ff849fdc8a2c9e2251cec13.jpg",
      icon: <Coffee size={14} />,
      tag: "Late Night",
      rotation: "rotate-2",
      tapeRotation: "rotate-[4deg]"
    },
  ];

  return (
    <section className=" px-6 py-12 sm:px-12 flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Soft Background Texture / Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-rose-50/50 rounded-full blur-3xl absolute top-10 left-10" />
        <div className="w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-3xl absolute bottom-10 right-10" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full max-w-5xl mb-16 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 bg-white rounded-full border border-stone-200/50 shadow-sm">
          <Heart size={14} className="text-rose-400 fill-rose-100" />
          <span className="text-xs font-medium tracking-wide text-stone-500 uppercase">Current Comforts</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif text-[#4a3f35] tracking-tight">
          Lately, I'm loving...
        </h2>
      </div>

      {/* Scrapbook Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full place-items-center">
        
        {/* The 3 Static Items */}
        {items.map((item) => (
          <div 
            key={item.id}
            className={`relative w-[240px] bg-white p-3 pb-5 rounded-2xl shadow-[0_8px_24px_rgba(149,135,112,0.08)] border border-[#f4f0ea] ${item.rotation}`}
          >
            {/* Image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-stone-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* Little Floating Tag */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5 text-[#5c4d42]">
                {item.icon}
                <span className="text-[10px] font-bold tracking-wide uppercase">{item.tag}</span>
              </div>
            </div>

            {/* Very minimal text */}
            <div className="px-2">
              <h3 className="text-lg font-bold text-[#4a3f35] leading-none mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-[#9a8c7e]">
                {item.subtitle}
              </p>
            </div>

            {/* Enhanced Washi Tape */}
            <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-7 bg-amber-100 backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-[#e8dfd1] border-t-white/80 rounded-[2px] ${item.tapeRotation}`} />
          </div>
        ))}

        {/* The Audio Player Card */}
        <div 
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative w-[240px] bg-white p-3 pb-5 rounded-2xl shadow-[0_8px_24px_rgba(149,135,112,0.08)] border border-[#f4f0ea] -rotate-1 cursor-pointer"
        >
          {/* Image / Vinyl Container */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-[#fdf8f5] flex flex-col items-center justify-center border border-[#f4f0ea]">
            
            {/* Little Floating Tag */}
            <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5 text-[#5c4d42]">
              <Headphones size={14} />
              <span className="text-[10px] font-bold tracking-wide uppercase">On Repeat</span>
            </div>

            {/* The Record */}
            <div className={`relative w-[65%] aspect-square rounded-full bg-[#1c1917] shadow-lg border-4 border-[#292524] flex items-center justify-center transition-all duration-1000 ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
              {/* Grooves */}
              <div className="absolute inset-2 rounded-full border border-white/5" />
              <div className="absolute inset-5 rounded-full border border-white/10" />
              
              {/* Center Label */}
              <div className="w-[35%] aspect-square rounded-full overflow-hidden border border-black z-10 relative">
                <img
                  src="https://i.pinimg.com/736x/aa/31/0a/aa310a201d08c0887fdf923e025de074.jpg"
                  alt="Album Art"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#fdfbf7] rounded-full shadow-inner" />
              </div>
            </div>

            {/* Play/Pause Indicator Overlay (Now consistently visible, no hover hidden state) */}
            <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#4a3f35]">
              {isPlaying ? (
                <div className="flex gap-0.5">
                  <div className="w-1 h-3 bg-rose-400 rounded-full animate-pulse" />
                  <div className="w-1 h-3 bg-amber-400 rounded-full animate-pulse delay-75" />
                </div>
              ) : (
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#4a3f35] border-b-[5px] border-b-transparent ml-1" />
              )}
            </div>

          </div>

          <div className="px-2">
            <h3 className="text-lg font-bold text-[#4a3f35] leading-none mb-1">
              Counting Stars
            </h3>
            <p className="text-sm font-medium text-[#9a8c7e] flex justify-between items-center">
              OneRepublic
              {isPlaying && <span className="text-[10px] text-rose-400 animate-pulse">Playing</span>}
            </p>
          </div>

          {/* Enhanced Washi Tape */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-7 bg-amber-100 backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-[#e8dfd1] border-t-white/80 rounded-[2px] -rotate-[3deg]" />
        </div>

      </div>
    </section>
  );
}