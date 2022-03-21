import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Welcome from "../src/components/Welcome";
import Outputbox from "./components/Outputbox";
import InputForm from "./components/InputForm";

function App() {
  //Try to incorporate Custom Hooks from custom_hooks folder
  const [seed, setSeed] = useState(null);
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState([]);

  const url = `https://randomuser.me/api/?seed=${seed}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
    return () => {
      setInput("");
    };
  }, [url]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSeed(input);
  };
  const onChange = (e) => setInput(e.target.value);
  return (
    <div className="container">
      <InputForm
        handleSubmit={handleSubmit}
        onChange={onChange}
        input={input}
      />
      {seed === null ? <Welcome /> : <Outputbox userData={userData} />}
    </div>
  );
}

export default App;
