import { cn } from "@/utils/cn";
import { ChefHat } from "lucide-react";

interface ToggleRecipeBtnProps {
  onToggle: () => void;
  toggle: boolean;
}

export function ToggleRecipeBtn({ onToggle, toggle }: ToggleRecipeBtnProps) {
  const isToggleTrue = toggle
    ? "bg-app-green translate-x-[150%] "
    : "bg-zinc-400";
  const afterContent = toggle
    ? "md:after:absolute md:after:left-24  md:after:text-nowrap md:after:text-lg md:after:content-['com_o_RestoRante']"
    : "md:before:absolute md:before:right-24 md:before:text-nowrap md:before:text-lg md:before:content-['sem_o_RestoRante']";
  return (
    <div
      className={cn(
        "relative col-span-full mx-auto flex h-10 w-full max-w-20 self-center rounded-full border border-zinc-500 bg-transparent p-2 duration-1000",
        afterContent,
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "grid size-6 cursor-pointer place-items-center rounded-full bg-zinc-400 transition-transform",
          isToggleTrue,
        )}
      >
        {toggle && <ChefHat className="size-5" />}
        {!toggle && "🙁"}
      </button>
    </div>
  );
}
