import { Name } from "./Person.types";

type props = {
  name: Name[];
};
const PersonList = ({ name }: props) => {
  return (
    <>
      {name.map((item) => (
        <p key={item.firstName}>
          {item.firstName}
          {item.lastName}
        </p>
      ))}
    </>
  );
};

export default PersonList;
