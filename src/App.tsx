import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import LoggedIn from "./components/state/LoggedIn";
import Counter from "./components/state/Counter";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Banner",
  };
  const list = [
    {
      firstName: "Tony",
      lastName: "Stark",
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
    },
    {
      firstName: "Prabhu",
      lastName: "Ji",
    },
  ];

  const [value, setValue] = useState("");
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
        <LoggedIn />
        <Counter />
      </div>
    </>
  );
}

export default App;
