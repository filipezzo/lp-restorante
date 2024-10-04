"use client";
import { ingredients, recipes } from "@/constants/ingredients";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Section } from "./section";
import { ToggleRecipeBtn } from "./toggle-recipe-btn";

export function Recipe() {
  const [toggle, setToggle] = useState(false);
  const { inView, ref } = useInView();

  const handleToggle = () => setToggle((s) => !s);

  const foodlist = toggle ? recipes : ingredients;
  const itemStyles = foodlist === recipes ? "block size-12 my-auto" : "";

  return (
    <Section ref={ref} className={cn(inView && "animate-animateShow4")}>
      <h2 className="mt-12 text-center text-3xl font-bold">Ingredientes</h2>
      <div className="mx-auto grid h-[600px] max-w-2xl grid-cols-3 gap-5 rounded-lg p-10">
        {foodlist.map((line, index) => (
          <motion.ul
            key={toggle ? `recipe-${index}` : `ingredient-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "flex h-[450px] flex-col items-center justify-between rounded-lg border border-zinc-500 p-5 dark:border-white",
            )}
          >
            {line.map((ingredient, index) => (
              <li key={index} className={cn("text-5xl", itemStyles)}>
                {ingredient.symbol}
              </li>
            ))}
          </motion.ul>
        ))}

        <ToggleRecipeBtn onToggle={handleToggle} toggle={toggle} />
      </div>
    </Section>
  );
}
