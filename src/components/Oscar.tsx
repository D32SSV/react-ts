type props = {
  children: React.ReactNode;
};
const Oscar = ({ children }: props) => {
  return <h3>{children}</h3>;
};

export default Oscar;
