type TextProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h5" | "p";
  children: string;
  weight: "normal" | "bold";
  size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  color: "white" | "cyan" | "grayishBlue" | "lightGray" | "brightYellow";
};

const Text = ({ as: Element, children, weight, size, color }: TextProps) => {
  const weightVariants = {
    normal: "font-normal",
    bold: "font-bold",
  };

  const sizeVariants = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
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
