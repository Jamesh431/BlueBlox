import { useState, useEffect } from "react";



export default function FetchInfo() {
  const showObjects = {}
  // const [shows, setShows] = useState()
  
  // const tvMazeInfo = {
  //   "username": "jdhales",
  //   "apikey": "_nsfO4xzpJw0R-Vsg5GxsVEUeuu1ouFo"
  // }

  useEffect(() => {
    // fetch("https://api.tvmaze.com/singlesearch/shows?q=The-Mandalorian")
    // fetch("https://api.tvmaze.com/singlesearch/shows?q=The-blacklist")
    // method: "POST"
    // body: JSON.stringify(tvMazeInfo),
    // headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" }
    fetch("http://api.tvmaze.com/shows") 
    .then((res) => res.json())
    .then ((data) =>{
      console.log(data)
      return sortShows(data)
    })
    .catch(err => console.log('Error: Fetch was not complete',err))
  })

  function sortShows(ArrofObj) {
    ArrofObj.sort((firstObj, secObj) => {
      if (firstObj.rating.average && secObj.rating.average) {
        if (firstObj.rating.average > secObj.rating.average) {
          return -1
        } else {
          return 1
        }
      }
    })

    console.log(ArrofObj)
  }



  // const [person, setPerson] = useState({})

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;

  //   fetch("https://swapi.tech/api/people", {
  //     signal
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .catch((err) => {
  //       console.error("Get Person Error: ", err);
  //     });

  //   return () => controller.abort();
  // }, []);
}



