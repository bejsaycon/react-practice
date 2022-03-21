import React from 'react'
import Figure from './Figure'
import InfoCard from './InfoCard';

function Outputbox(props) {
  return (
    <React.Fragment>
    <div className="below-input-box">
          <Figure src={props.usersData.results[0].picture.large}/>
          <InfoCard user={props.usersData.results[0]}/>
    </div>
        </React.Fragment>
  )
}

export default Outputbox