import React from "react";
import UserDetails from "./UserDetails";

function InfoCard({user}) {
  return (
    <>
      <div className="user-info-card">
        <UserDetails
          className={"user-name user-details head-text"}
          iconClass={"fas fa-user"}
          children={
            user.name.title +
            " " +
            user.name.first +
            " " +
            user.name.last
          }
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-map-marker-alt"}
          children={
            user.location.street.name +
            " " +
            user.location.street.number +
            ", " +
            user.location.city + 
            ", " +
            user.location.state +
            " " +
            user.location.postcode +
            ", " +
            user.location.country
          }
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-envelope"}
          children={" "+user.email}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-phone-alt"}
          children={" "+user.phone}
        />
      </div>
    </>
  );
}

export default InfoCard;
