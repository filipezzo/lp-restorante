import { ComponentProps, forwardRef, ReactNode } from "react";

interface SectionProps extends ComponentProps<"section"> {
  children: ReactNode;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    return <section ref={ref} {...props} />;
  },
);

Section.displayName = "Section";
