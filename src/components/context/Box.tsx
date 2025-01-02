import { useContext } from "react";
import { ThemeContext } from "./theme"; 

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.primary.main, color:theme.primary.text }}>THEME CONTEXT Box</div>
  );
};

export default Box;
