import { WORKS } from "../data";
import StampCard from "./StampCard";

export default function WorkSection() {
  // Lock it to exactly 2: The Gentle Ferry and My Scrapbook
  const featuredWorks = WORKS.slice(0, 2);

  return (
    <section id="work" className="bg-[#f7f7f5] px-6">
      {/* 
         Max-width 3xl (around 768px) is the "sweet spot" for 2 cards. 
         Any wider and they drift too far apart.
      */}
      <div className="mx-auto max-w-6xl px-5 py-8 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredWorks.map((project, index) => (
            <StampCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}