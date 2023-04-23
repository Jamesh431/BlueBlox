import { useEffect } from "react"

import getShows from "../helpers/getShows.js"

export default async function FilterShowsByGenre(genreFilter) {
  
  try {
    const showData = await getShows();
    const parsedShows = showData.filter((show) => show.genres.includes(genreFilter));
    return parsedShows;
  } catch (err) {
    console.error("SortByCategory Error: ", err);
  }
  
}

