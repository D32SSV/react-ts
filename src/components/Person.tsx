import { peopleProps } from "./Person.types";

const Person = ({ name }: peopleProps) => {
  return (
    <p>
      {name.firstName} {name.lastName}
    </p>
  );
};

export default Person;
