import React from "react";
import { useCountRenders } from "../custom_hooks/useCountRenders";

const Figure = React.memo(({src})=>{
    useCountRenders('Figure');
    return (
      <figure className="img-prof">
        <img src={src} className alt="USER-PROFILE" />
      </figure>
    );
  })
export default Figure;
