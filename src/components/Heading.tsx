type props = {
  children: string;
  style: React.CSSProperties;
};

const Heading = ({ children, style }: props) => {
  return <p style={style}>{children}</p>;
};

export default Heading;
