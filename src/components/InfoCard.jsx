import React from "react";
import { useCountRenders } from "../custom_hooks/useCountRenders";

export const InfoCard = React.memo(({user})=>{
    useCountRenders('Info');
    const { name, location, email, phone } = user;
    return (
        <div className="user-info-card">
          <div className="user-name user-details head-text">
            <i className="fas fa-user"></i>
            {` ${name.title} ${name.first} ${name.last}`}
          </div>
          <div className="user-details head-text">
            <i className="fas fa-map-marker-alt"></i>
            {` ${location.street.name} ${location.street.number}, ${location.city}, ${location.state} ${location.postcode} ${location.country}`}
          </div>
          <div className="user-details head-text">
            <i className="fas fa-envelope"></i>
            {` ${email}`}
          </div>
          <div className="user-details head-text">
            <i className="fas fa-phone-alt"></i>
            {` ${phone}`}
          </div>
        </div>
      );
});