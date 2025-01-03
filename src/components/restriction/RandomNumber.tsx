type Number = {
  value: number;
};

type Postive = Number & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type Negative = Number & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type Zero = Number & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type Props = Postive | Negative | Zero;

const RandomNumber = ({ value, isNegative, isPositive, isZero }: Props) => {
  return (
    <p>
      {value}
      {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </p>
  );
};

export default RandomNumber;
