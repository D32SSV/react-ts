type props = {
  name: {
    firstName: string;
    lastName: string;
  }[];
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
