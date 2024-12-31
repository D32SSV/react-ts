import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
  return (
    <>
      <Greet name={"Bhai"} msgCount={10} auth={true} />
      <Person name={personName} />
      <PersonList name={list} />
      <Status status="success" />
      <Heading>This is children type prop</Heading>
      <Oscar>
        <Heading>This is ReactNode children prop type</Heading>
      </Oscar>
      <Greet
        name={"Bhai Ji, This is optional prop type, no msgCount"}
        auth={true}
      />
    </>
  );
}

export default App;
