import { useEffect, useState } from "react"
import ScaleLoader from "react-spinners/ScaleLoader";

import getShows from "../helpers/getShows.js"
import PaginateShows from "./PaginateShows.js"

export default function RenderPopular() {
  const [shows, setShows] = useState([]) 
  const [loaded, setLoaded] = useState(false)


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
      setLoaded(true)
      setShows(popluar)
    })
     .catch(err => console.error("Get Shows Erro: ", err))
  }, [])

    return(
      loaded ? 
          <PaginateShows category={'Top Rated'} sortedArrOfObj={shows}/>

        :

        <div className="loading"> 
          <ScaleLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          color= "#4BCFFA"
          />
        </div>
    
    ) 
  }