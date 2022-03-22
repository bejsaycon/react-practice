import React, { useState} from "react";
import "../src/styles/App.css";
import Welcome from "../src/components/Welcome";
import Outputbox from "./components/Outputbox";
import InputForm from "./components/InputForm";
import { useFetch } from "./custom_hooks/useFetch";

function App() {
  //Try to incorporate Custom Hooks from custom_hooks folder
  const [seed, setSeed] = useState(null);
  const url = `https://randomuser.me/api/?seed=${seed}`;
  const data = useFetch(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSeed(event.target[0].value);
  };

  return (
    <div className="container">
      <InputForm
        handleSubmit={handleSubmit}
        seed={seed}
      />
      {seed === null ? <Welcome /> : <Outputbox usersData={data} />}
    </div>
  );
}

export default App;
