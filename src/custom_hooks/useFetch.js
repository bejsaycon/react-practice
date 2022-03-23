import { useState, useEffect } from "react";

export const useFetch = (url) => {
const [state, setState] = useState({data: null})
useEffect(()=>{
    setState(state =>({data: state.data}));
    fetch(url)
    .then(response => response.json())
    .then(y=>{
        setState({data: y});
    });

}, [url])

return state;
}