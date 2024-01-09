type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-white w-full rounded-md bg-brightYellow py-3 font-bold">
      {children}
    </button>
  );
};

export default Button;
