// import { useState } from "react";
import "./App.css";
import LoggedIn from "./components/state/LoggedIn";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import MutableRef from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import CustomButton from "./components/html/Button";
import PropExport from "./components/html/PropExport";

function App() {
  // const personName = {
  //   firstName: "Bruce",
  //   lastName: "Banner",
  // };
  // const list = [
  //   {
  //     firstName: "Tony",
  //     lastName: "Stark",
  //   },
  //   {
  //     firstName: "Steve",
  //     lastName: "Rogers",
  //   },
  //   {
  //     firstName: "Prabhu",
  //     lastName: "Ji",
  //   },
  // ];

  // const [value, setValue] = useState("");
  return (
    <>
      {/* <>
        <Greet name={"Bhai"} msgCount={10} auth={true} />
        <Person name={personName} />
        <PersonList name={list} />
        <Status status="success" />
        <Heading style={{ padding: "1rem", color: "crimson" }}>
          This is children type prop
        </Heading>
        <Oscar>
          <Heading style={{ color: "cornsilk" }}>
            This is ReactNode children prop type
          </Heading>
        </Oscar>
        <Greet
          name={"Bhai Ji, This is optional prop type, no msgCount"}
          auth={true}
        />
        <Button handleClick={(event) => console.log("Jai Shri Ram", event)} />
        <Input
          value={value}
          handleChange={(event) => {
            console.log(event.target.value);
            return setValue(event.target.value);
          }}
        />
      </> */}
      <div>
        {/* <LoggedIn />
        <Counter />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContextProvider>
          <User />
        </UserContextProvider> */}
        {/* <MutableRef /> */}
        {/* <Private isLoggedIn={true} component={Profile} />
        <List
          items={["Batman", "Superman", "IronMan", "Hanuman"]}
          onClick={(name) => console.log(name)}
        />
        <RandomNumber value={10} isPositive />
        <Toast position="left-center" /> */}
        <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
          Primary Button
        </CustomButton>
        <PropExport msgCount={10} name="Shiv" auth={true} />
      </div>
    </>
  );
}

export default App;
