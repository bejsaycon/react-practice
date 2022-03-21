import React from "react";

function InfoCard() {
  return (
    <div className="user-info-card">
      <div id="user-name" className="user-details head-text">
        <i className="fas fa-user"></i> {props.userData.results[0].name.title}{" "}
        {props.userData.results[0].name.first}{" "}
        {props.userData.results[0].name.last}
      </div>
      <div id="address" className="user-details head-text">
        <i className="fas fa-map-marker-alt"></i>{" "}
        {props.userData.results[0].location.street.name}{" "}
        {props.userData.results[0].location.street.number}
        {", "}
        {props.userData.results[0].location.city}
        {", "}
        {props.userData.results[0].location.state}{" "}
        {props.userData.results[0].location.postcode}
        {", "}
        {props.userData.results[0].location.country}
      </div>
      <div id="email" className="user-details head-text">
        <i className="fas fa-envelope"></i> {props.userData.results[0].email}
      </div>
      <div id="phone" className="user-details head-text">
        <i className="fas fa-phone-alt"></i> {props.userData.results[0].phone}
      </div>
    </div>
  );
}

export default InfoCard;
