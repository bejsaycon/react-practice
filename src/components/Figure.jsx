import React from 'react'

function Figure(props) {
  return (
    <figure className="img-prof">
            <img
              src={props.src}
              className
              alt="USER-PROFILE"
            />
    </figure>
  )
}

export default Figure