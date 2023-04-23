import { useEffect } from "react"

import getShows from "../helpers/getShows.js"

export default function FilterShowsByGenre(genreFilter) {
  const FilteredShows = () => {
    useEffect(() => {
      getShows()
      .then(data => {
        const parseShows = data.filter(show => {return show.genres.includes(genreFilter)})
        return parseShows
      })
      .catch(err => console.error("SortByCategory Erro: ", err))
      
    }, [genreFilter])
  }
    
    return FilteredShows
}

