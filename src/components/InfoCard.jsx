import React from "react";
import UserDetails from "./UserDetails";

function InfoCard(props) {
  return (
    <>
      <div className="user-info-card">
        <UserDetails
          className={"user-name user-details head-text"}
          iconClass={"fas fa-user"}
          children={
            props.user.name.title +
            " " +
            props.user.name.first +
            " " +
            props.user.name.last
          }
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-map-marker-alt"}
          children={
            props.user.location.street.name +
            " " +
            props.user.location.street.number +
            ", " +
            props.user.location.city + 
            ", " +
            props.user.location.state +
            " " +
            props.user.location.postcode +
            ", " +
            props.user.location.country
          }
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-envelope"}
          children={" "+props.user.email}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-phone-alt"}
          children={" "+props.user.phone}
        />
      </div>
    </>
  );
}

export default InfoCard;
