type prop = {
  name: string;
  msgCount?: number;
  auth: boolean;
};

const Greet = ({ name, msgCount = 0, auth }: prop) => {
  return (
    <>
      {auth ? (
        <>
          <h2>Welcome {name} !! Ram Ram </h2>
          {msgCount >= 0 && <p>you have {msgCount} unread msgs</p>}
        </>
      ) : (
        <p>Login kar pehle</p>
      )}
    </>
  );
};

export default Greet;
