import { useState, useRef, useEffect } from "react";
import { LeftCard } from "./left";
import { MiddleCard } from "./middle";
import { RightCard } from "./right";
import { ProgressBar } from "../../components";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const cards = [<LeftCard />, <MiddleCard />, <RightCard />];

  // Detect scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handler = () => {
      const scrollPos = container.scrollLeft;
      const cardWidth = container.clientWidth;

      const index = Math.round(scrollPos / cardWidth) + 1;
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handler);
    return () => container.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="flex flex-col">
      <div
        ref={scrollRef}
        className="
          flex mt-20 ml-20
          overflow-x-scroll 
          snap-x 
          snap-mandatory 
          no-scrollbar 
          w-full 
          h-screen 
          items-center
        "
      >
        {cards.map((CardComponent, i) => (
          <div
            key={i}
            className="
              snap-start 
              flex-shrink-0 
              w-full 
              h-full 
              flex 
              items-center 
              justify-center
            "
          >
            {CardComponent}
          </div>
        ))}
      </div>
      <ProgressBar active={activeIndex} total={3} />
    </div>
  );
};
