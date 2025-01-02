import React, { useContext } from "react";
import { userContext } from "./UserContext";

const User = () => {
  const user = useContext(userContext);

  const logout = () => {
    user?.setUser(null);
  };

  const login = () => {
    user?.setUser({ name: "I am in Brucewa", email: "batman@kool.cave" });
  };
  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <p>UserName is : {user?.user?.name}</p>
      <p>User Email is : {user?.user?.email}</p>
    </>
  );
};

export default User;
