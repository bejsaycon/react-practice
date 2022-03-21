import React from "react";

function UserDetails(props) {
  return (
    <div className={props.className}>
      <i className={props.iconClass}></i>
      {props.children}
    </div>
  );
}

export default UserDetails;
