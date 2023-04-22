import { useEffect, useState } from "react"

import getShows from "./getShows.js"
import PaginateShows from "./PaginateShows.js"

export default function RenderByCategory(props) {
  const [shows, setShows] = useState([])

  useEffect(() => {
    getShows()
    .then(data => {
      const filterByGenre = data.filter(show => {return show.genres.includes(props.genre)})
      setShows(filterByGenre)
    })
    .catch(err => console.error("SortByCategory Erro: ", err))

  }, [props.genre])


  return (
    <PaginateShows category={props.genre} sortedArrOfObj={shows}/>
  )
}