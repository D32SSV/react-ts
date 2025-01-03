import { ReactNode } from "react";

type Props<T extends ReactNode> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends ReactNode>({ items, onClick }: Props<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, idx) => {
        return (
          <p
            key={idx}
            onClick={() => onClick(item)}
            style={{ padding: "0.5rem" }}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default List;
