"use client";
import { useTheme } from "@/context/theme-context";
import { cn } from "@/utils/cn";
import { MoonIcon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "grid size-10 place-items-center rounded-full border border-zinc-500 hover:cursor-pointer",
      )}
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
}
