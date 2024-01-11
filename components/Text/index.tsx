type TextProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h5" | "p";
  children: string;
  weight: "normal" | "bold";
  size: "sm" | "base" | "xl" | "3xl";
  color: "white" | "cyan" | "grayishBlue" | "lightGray" | "brightYellow";
};

const Text = ({ as: Element, children, weight, size, color }: TextProps) => {
  const weightVariants = {
    normal: "font-normal",
    bold: "font-bold",
  };

  const sizeVariants = {
    sm: "text-sm lg:text-base",
    base: "text-base lg:text-lg",
    xl: "text-xl lg:text-2xl",
    "3xl": "text-3xl lg:text-4xl",
  };

  const colorVariants = {
    white: "text-white",
    cyan: "text-cyan",
    grayishBlue: "text-grayishBlue",
    lightGray: "text-lightGray",
    brightYellow: "text-brightYellow",
  };

  return (
    <Element
      className={`${weightVariants[weight]} ${sizeVariants[size]} ${colorVariants[color]}`}
    >
      {children}
    </Element>
  );
};

export default Text;
