import React, { useState, useRef } from "react";
import "../src/styles/App.css";
import Welcome from "../src/components/Welcome";
import Outputbox from "./components/Outputbox";
import InputForm from "./components/InputForm";
import { useFetch } from "./custom_hooks/useFetch";

function App() {
  //Try to incorporate Custom Hooks from custom_hooks folder
  const [seed, setSeed] = useState(null);
  const url = `https://randomuser.me/api/?seed=${seed}`;
  const inputRef = useRef();

  const data = useFetch(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSeed(inputRef.current.value);
  };

  return (
    <div className="container">
      <InputForm
        handleSubmit={handleSubmit}
        input ={inputRef}
        seed={seed}
      />
      {seed === null ? <Welcome /> : <Outputbox usersData={data} />}
    </div>
  );
}

export default App;
