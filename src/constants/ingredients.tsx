import { Ingredients, Recipes } from "@/types/types";
import { Pizza, Salad, Soup } from "lucide-react";

export const ingredients: Ingredients[][] = [
  [
    { id: 1, symbol: "🍅" },
    { id: 2, symbol: "🧅" },
    { id: 3, symbol: "🌶️" },
  ],

  [
    { id: 4, symbol: "🥕" },
    { id: 5, symbol: "🧄" },
    { id: 6, symbol: "🥬" },
  ],

  [
    { id: 7, symbol: "🍅" },
    { id: 8, symbol: "🍕" },
    { id: 9, symbol: "🧀" },
  ],
];

export const recipes: Recipes[][] = [
  [{ id: 1, symbol: <Soup className="size-12 text-app-green" /> }],
  [{ id: 1, symbol: <Salad className="size-12 text-app-green" /> }],
  [{ id: 1, symbol: <Pizza className="size-12 text-app-green" /> }],
];
