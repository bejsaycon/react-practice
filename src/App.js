import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Welcome from "../src/components/Welcome";
import Outputbox from "./components/Outputbox";

function App() {
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

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          name="seed"
          placeholder="Enter random string"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      {seed === null ? <Welcome /> : <Outputbox userData={userData} />}
    </div>
  );
}

export default App;
