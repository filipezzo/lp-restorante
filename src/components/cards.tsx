"use client";
import { cards } from "@/constants/cards";
import { cn } from "@/utils/cn";
import { useInView } from "react-intersection-observer";
import { CardItem } from "./card-item";

export function Cards() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className="w-full">
      <ul
        className={cn(
          "container mx-auto mt-5 grid grid-cols-1 gap-5 p-5 transition-all duration-700 md:mt-20 md:grid-cols-3 lg:mt-32",
          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0",
        )}
      >
        {cards.map((card) => (
          <CardItem key={card.heading} card={card} />
        ))}
      </ul>
    </section>
  );
}
