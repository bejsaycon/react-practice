import React from 'react'

function Figure({src}) {
  return (
    <figure className="img-prof">
            <img
              src={src}
              className
              alt="USER-PROFILE"
            />
    </figure>
  )
}

export default Figure