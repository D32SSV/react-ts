import { useEffect, useState } from "react";

type Auth = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<Auth>({} as Auth);

  useEffect(() => setUser({ name: "KRSNA", email: "RAM" }), []);
  return (
    <>
      <p>Username is: {user.name}</p>
    </>
  );
};

export default User;
