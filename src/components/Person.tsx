
type props = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = ({ name }: props) => {
  return (
    <p>
      {name.firstName} {name.lastName}
    </p>
  );
};

export default Person;
