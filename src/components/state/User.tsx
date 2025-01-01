import { useState, useEffect } from "react";

type Auth = {
  name: string;
  email: string;
  isLogged: boolean;
};

const User = ({
  isLogged,
  name = "Guest",
  email = "krsna@kalamkaar.com",
}: Auth) => {
  const [user, setUser] = useState<Auth | null>(null);

  useEffect(() => {
    if (isLogged) {
      setUser({ name, email, isLogged: true });
    } else {
      setUser(null);
    }
  }, [isLogged, name, email]);

  return (
    <>
      {isLogged ? (
        <p>Username is: {user?.name}</p>
      ) : (
        <p>User is not logged in</p>
      )}
    </>
  );
};

export default User;
