import React from 'react'
import InfoCard from './InfoCard';


function Figure({src}) {
  return (
    <figure className="img-prof">
            <img src={src} className alt="USER-PROFILE"/>
    </figure>
  )
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