import { useEffect, useState } from "react";



export default function FetchInfo() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows") 
    .then((res) => res.json())
    .then((data) => setShows(data))
    .catch(err => console.log('Error: Fetch was not complete',err))
  },[])

  return shows
}





// -------------
  // either filter through or splice to set results that have already been sorted for the top 20


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
// }



