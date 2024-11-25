import { Cards } from "@/types/types";

interface CardItemProps {
  card: Cards;
}

export function CardItem({ card }: CardItemProps) {
  return (
    <li className="flex flex-col items-center gap-5 rounded-md">
      <div className="grid size-20 place-items-center rounded-full border bg-zinc-400/50 dark:bg-zinc-800/50">
        {card.icon}
      </div>

      <h3 className="text-xl font-bold text-app-green">{card.heading}</h3>
      <p className="text-gray-700 md:text-base dark:text-gray-400">
        {card.paragraph}
      </p>
    </li>
  );
}
