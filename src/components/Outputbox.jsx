import React from 'react'
import Figure from './Figure'

function Outputbox(props) {
  return (
    <div className="below-input-box">
          <Figure src={props.userData.results[0].picture.large}/>

          <div className="user-info-card">
            <p id="user-name" className="user-details head-text">
              <i className="fas fa-user"></i> {props.userData.results[0].name.title}{" "}
              {props.userData.results[0].name.first} {props.userData.results[0].name.last}
            </p>
            <p id="address" className="user-details head-text">
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
            </p>
            <p id="email" className="user-details head-text">
              <i className="fas fa-envelope"></i> {props.userData.results[0].email}
            </p>
            <p id="phone" className="user-details head-text">
              <i className="fas fa-phone-alt"></i> {props.userData.results[0].phone}
            </p>
          </div>


        </div>
  )
}

export default Outputbox