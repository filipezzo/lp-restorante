import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/cn";

interface LinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  variant?: boolean;
  className?: string;
}

export function Alink({
  className,
  variant = false,
  children,
  ...rest
}: LinkProps) {
  const variantStyles = variant
    ? "bg-transparent hover:dark:bg-zinc-500 hover:bg-zinc-300 "
    : "bg-app-green hover:opacity-80 active:bg-green-400";

  return (
    <a
      className={cn(
        "cursor-pointer select-none rounded-md px-4 py-2 transition-all",
        variantStyles,
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
