import { useState, useRef, useEffect } from "react";
import { LeftCard } from "./left";
import { MiddleCard } from "./middle";
import { RightCard } from "./right";
import { ProgressBar } from "../../components";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const cards = [<LeftCard />, <MiddleCard />, <RightCard />];
  const total = cards.length;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handler = () => {
      const scrollPos = container.scrollLeft;
      const cardWidth = container.clientWidth;

      let index = Math.round(scrollPos / cardWidth) + 1;
      index = Math.max(1, Math.min(index, total)); // clamp value

      setActiveIndex(index);
    };

    container.addEventListener("scroll", handler);
    return () => container.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div
        ref={scrollRef}
        className="
          flex mt-20 ml-0 md:ml-20
          overflow-x-scroll 
          snap-x
          snap-mandatory 
          no-scrollbar 
          w-full 
          h-screen 
          items-center
          gap-6
        "
      >
        {cards.map((CardComponent, i) => (
          <div
            key={i}
            className="
              snap-start 
              flex-shrink-0 
              w-screen 
              max-w-screen 
              md:w-full 
              h-full 
              flex 
              items-center 
              justify-center 
              overflow-hidden
            "
          >
            <div className="w-full max-w-full overflow-hidden px-4">
              {CardComponent}
            </div>
          </div>
        ))}
      </div>

      <ProgressBar active={activeIndex} total={total} />
    </div>
  );
};
