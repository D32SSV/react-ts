type HorizontalPos = "center" | "left" | "right";
type VerticalPos = "center" | "top" | "bottom";

type Position = {
  position:
    | Exclude<`${HorizontalPos}-${VerticalPos}`, "center-center">
    | "center";
};

const Toast = ({ position }: Position) => {
  return <div>Toast position is {position}</div>;
};

export default Toast;
