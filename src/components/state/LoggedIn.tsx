import React, { useState } from "react";
import User from "./User";

const LoggedIn = () => {
  const [isLogged, setIsLogged] = useState(false);

  function handleLogin() {
    setIsLogged(!isLogged);
  }

  return (
    <div>
      <button onClick={handleLogin}>{isLogged ? "Log Out" : "Log In"}</button>
      <p>User is {!isLogged ? "Not Logged In" : "Logged In"}</p>
      <User />
    </div>
  );
};

export default LoggedIn;
