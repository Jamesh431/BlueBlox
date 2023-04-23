import { useEffect, useState } from "react"

import getShows from "../helpers/getShows.js"
import PaginateShows from "./PaginateShows.js"

export default function RenderPopular() {
  const [shows, setShows] = useState([]) 


  useEffect(() => {
    getShows()
     .then(data => {
      const popluar = data.sort((firstObj, secObj) => {
        if (firstObj.rating.average && secObj.rating.average) {
          if (firstObj.rating.average > secObj.rating.average) {
            return -1
          } else {
            return 1
          }
        }
    })

      setShows(popluar)
    })
     .catch(err => console.error("Get Shows Erro: ", err))
  }, [])
  console.log(shows)

    return(<PaginateShows category={'Popular Shows'} sortedArrOfObj={shows}/>) 
  }