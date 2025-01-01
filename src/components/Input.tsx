import React from "react";

type prop = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: prop) => {
  return <input value={value} onChange={(event) => handleChange(event)} />;
};

export default Input;
