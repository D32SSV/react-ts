import React from "react";

type TextProps<E extends React.ElementType> = {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
  children?: React.ReactNode;
  as?: E;
};

type Props<E extends React.ElementType> = TextProps<E> &
  Omit<React.ComponentProps<E>, keyof TextProps<E>>;

const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: Props<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${color}-${size}`}>{children}</Component>
  );
};

export default Text;
