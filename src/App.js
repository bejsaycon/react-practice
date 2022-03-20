import React, { useState, useEffect } from "react";
import "./App.css";

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
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>

      {seed === null ? (
        <div className="below-input-box">
          <p className="head-text" id="welcome-message">
            Welcome to Random user Generator, Enter any keyword to start
          </p>
        </div>
      ) : (
        <div className="below-input-box">
          <figure className="img-prof">
            <img
              src={userData.results[0].picture.large}
              className
              alt="USER PROFILE"
            />
          </figure>

          <div className="user-info-card">
            <p id="user-name" className="user-details head-text">
              <i className="fas fa-user"></i> {userData.results[0].name.title}{" "}
              {userData.results[0].name.first} {userData.results[0].name.last}
            </p>
            <p id="address" className="user-details head-text">
              <i className="fas fa-map-marker-alt"></i>{" "}
              {userData.results[0].location.street.name}{" "}
              {userData.results[0].location.street.number}
              {", "}
              {userData.results[0].location.city}
              {", "}
              {userData.results[0].location.state}{" "}
              {userData.results[0].location.postcode}
              {", "}
              {userData.results[0].location.country}
            </p>
            <p id="email" className="user-details head-text">
              <i className="fas fa-envelope"></i> {userData.results[0].email}
            </p>

            <p id="phone" className="user-details head-text">
              <i className="fas fa-phone-alt"></i> {userData.results[0].phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
