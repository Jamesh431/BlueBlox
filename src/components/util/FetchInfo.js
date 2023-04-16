import { useState, useEffect } from "react";

export default function FetchInfo() {
  // const []
  
  const tvMazeInfo = {
    username: "jdhales",
    password: "_nsfO4xzpJw0R-Vsg5GxsVEUeuu1ouFo"
  }

  fetch("https://www.tvmaze.com/api", {
    method: "POST",
    headers: JSON.stringify(tvMazeInfo)
  })
  .then((res) => res.json())
  .then ((data) => console.log(data))
  .catch(err => console.log('Error: Fetch was not complete',err))
}

