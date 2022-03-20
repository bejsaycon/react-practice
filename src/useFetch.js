import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(y=>{
        console.log(y);
    })
}, [url])
}