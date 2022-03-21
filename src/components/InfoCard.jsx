import React from "react";

function InfoCard(props) {
  return (
    <div className="user-info-card">
      <div id="user-name" className="user-details head-text">
        <i className="fas fa-user"></i> {props.user.name.title}{" "}
        {props.user.name.first}{" "}
        {props.user.name.last}
      </div>
      <div id="address" className="user-details head-text">
        <i className="fas fa-map-marker-alt"></i>{" "}
        {props.user.location.street.name}{" "}
        {props.user.location.street.number}
        {", "}
        {props.user.location.city}
        {", "}
        {props.user.location.state}{" "}
        {props.user.location.postcode}
        {", "}
        {props.user.location.country}
      </div>
      <div id="email" className="user-details head-text">
        <i className="fas fa-envelope"></i> {props.user.email}
      </div>
      <div id="phone" className="user-details head-text">
        <i className="fas fa-phone-alt"></i> {props.user.phone}
      </div>
    </div>
  );
}

export default InfoCard;
