import { useState, useEffect } from "react";

export const useFetch = (url) => {

const [data, setData] = useState(null)
useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(y=>{
        console.log('new data fetched');
        setData(y);
    });
}, [url])

return data;
}