import { useState, useEffect } from "react";

export default function FetchInfo() {
  // const []
  
  const tvMazeInfo = {
    "username": "jdhales",
    "apikey": "_nsfO4xzpJw0R-Vsg5GxsVEUeuu1ouFo"
  }

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      // method: "POST"
      // body: JSON.stringify(tvMazeInfo),
      // headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" }
    .then((res) => res.json())
    .then ((data) => console.log(data))
    .catch(err => console.log('Error: Fetch was not complete',err))
  })
}

