import { ReactElement } from "react";

export type Cards = {
  icon: ReactElement;
  heading: string;
  paragraph: string;
};

export type Ingredients = {
  id: number;
  symbol: string;
};

export type Recipes = {
  id: number;
  symbol: ReactElement;
};
