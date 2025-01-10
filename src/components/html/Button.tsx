type Props = {
  variant: "primary" | "seconday";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const CustomButton = ({ variant, children, ...rest }: Props) => {
  return (
    <button className={`class-name-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
