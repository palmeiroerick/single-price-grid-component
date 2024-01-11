import type { ReactNode } from "react";

type SectionProps = {
  color: "white" | "cyan" | "lightCyan";
  children: ReactNode;
};

const Section = ({ color, children }: SectionProps) => {
  const colorVariants = {
    white: "bg-white",
    cyan: "bg-cyan",
    lightCyan: "bg-lightCyan",
  };

  return (
    <section className={`${colorVariants[color]} flex flex-col gap-6 p-6`}>
      {children}
    </section>
  );
};

export default Section;
