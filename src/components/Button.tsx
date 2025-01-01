import React from "react";
type prop = {
  handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ handleClick }: prop) => {
  return <button onClick={(event) => handleClick(event)}>Click me</button>;
};

export default Button;
