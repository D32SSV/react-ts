type props = {
  children: string;
};

const Heading = ({ children }: props) => {
  return <p>{children}</p>;
};

export default Heading;
