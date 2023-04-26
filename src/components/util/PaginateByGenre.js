import { useEffect, useState } from "react"

import getShows from "../helpers/getShows.js"
import PaginateShows from "./PaginateShows.js"

export default function PaginateByGenre(props) {
  const [shows, setShows] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getShows()
    .then(data => {
      const filterByGenre = data.filter(show => {return show.genres.includes(props.genre)})
      setLoaded(true)
      setShows(filterByGenre)
    })
    .catch(err => console.error("SortByCategory Erro: ", err))

  }, [props.genre])



  return (
    loaded ?
    <PaginateShows category={props.genre} sortedArrOfObj={shows}/>
    
    :

    <></>
    )

}