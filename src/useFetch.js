import React, { useState, useEffect } from "react";

export const useFetch = (url) => {

const [data, setData] = useState(null)


useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(y=>{
        setData(y);
    });
}, [url])

return data;
}