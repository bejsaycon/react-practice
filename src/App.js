import React, { useState } from "react";
import "./App.css";
import { useForm } from "./useForm";

function App() {
  //useStates for data and seed for user random generator
  const [userData, setUserData] = useState([]);
  const [values, handleChange] = useForm({seed:""});

  //fetch randomuser api with seed from the input box
  const getUser = (event) => {
    if (event.key == "Enter") {
      fetch(`https://randomuser.me/api/?seed=${values.seed}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })        
    }
  };
  
  return (
    <div className="container">
      <input  
        className="input"
        name="seed"
        placeholder="Enter random string"
        onChange={handleChange}
        value={values.seed}
        onKeyPress={getUser}       
      />

      {typeof userData.results === "undefined" ? (
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
            <i className="fas fa-envelope"></i>{" "}
              {userData.results[0].email}
            </p>

            <p id="phone" className="user-details head-text">
            <i className="fas fa-phone-alt"></i>{" "}
              {userData.results[0].phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
