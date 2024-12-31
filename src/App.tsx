import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
      firstName: "Katrina",
      lastName: "Kaif",
    },
  ];
  return (
    <>
      <Greet name={"Bhai"} msgCount={10} auth={!true} />
      <Person name={personName} />
      <PersonList name={list} />
    </>
  );
}

export default App;
