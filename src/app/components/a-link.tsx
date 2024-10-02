import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/cn";

interface LinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  variant?: boolean;
}

export function Alink({ variant = false, children, ...rest }: LinkProps) {
  const variantStyles = variant
    ? "bg-transparent hover:bg-zinc-500 "
    : "bg-app-green hover:opacity-80 active:bg-green-400";

  return (
    <a
      className={cn(
        "cursor-pointer select-none rounded-md px-4 py-2 transition-all",
        variantStyles,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
