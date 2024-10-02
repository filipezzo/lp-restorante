"use client";
import { MoonIcon } from "lucide-react";
import { cn } from "../utils/cn";

export function ThemeSwitcher() {
  return (
    <div
      className={cn(
        "grid size-10 place-items-center rounded-full border border-zinc-500 hover:cursor-pointer",
      )}
    >
      <MoonIcon className="size-5" />
    </div>
  );
}
