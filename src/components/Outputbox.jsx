import React from 'react'


function Figure({src}) {
  return (
    <figure className="img-prof">
      <img src={src} className alt="USER-PROFILE"/>
    </figure>
  )
}
function UserDetails({className, iconClass, children}) {
  return (
    <div className={className}>
      <i className={iconClass}></i>
      {children}
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
          children={` ${name.title} ${name.first} ${name.last}`}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-map-marker-alt"}
          children={` ${location.street.name} ${location.street.number}, ${location.city}, ${location.state} ${location.postcode} ${location.country}`}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-envelope"}
          children={` ${email}`}
        />
        <UserDetails
          className={"user-details head-text"}
          iconClass={"fas fa-phone-alt"}
          children={` ${phone}`}
        />
      </div>
    </>
  );
}


function Outputbox({usersData}) {
  return (
    <React.Fragment>
      <div className="below-input-box">
            <Figure src={usersData.results[0].picture.large}/>
            <InfoCard user={usersData.results[0]}/>
      </div>
    </React.Fragment>
  )
}


export default Outputbox