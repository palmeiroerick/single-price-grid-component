import type { ReactNode } from "react";

type SectionProps = {
  color: "white" | "cyan" | "lightCyan";
  children: ReactNode;
};

const Section = ({ color, children }: SectionProps) => {
  return (
    <section className={`bg-${color} flex flex-col gap-6 p-6`}>
      {children}
    </section>
  );
};

export default Section;
