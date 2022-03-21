import React from "react";

function UserDetails(props) {
  return (
    <div className={props.className}>
      <i className={props.iconClass}></i>
      {props.children}
    </div>
  );
}

function InfoCard({user}) {
  const {name, location, email, phone} = user;
  return (
    <>
      <div className="user-info-card">
        <UserDetails
          className={"user-name user-details head-text"}
          iconClass={"fas fa-user"}
          children={`${name.title} ${name.first} ${name.last}`}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-map-marker-alt"}
          children={`${location.street.name} ${location.street.number}, ${location.city}, ${location.state} ${location.postcode} ${location.country}`}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-envelope"}
          children={`${email}`}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-phone-alt"}
          children={`${phone}`}
        />
      </div>
    </>
  );
}

export default InfoCard;
