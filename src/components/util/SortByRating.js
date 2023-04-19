import { useEffect, useState } from "react"
import FetchInfo from "./FetchInfo.js"


export default function SortByRating(props) {
  const [newArrOfObj, setNewArrOfObj] = useState([])
  const arrOfObj = [...FetchInfo()]
  
  useEffect(() => {
    arrOfObj.sort((firstObj, secObj) => {
      if (firstObj.rating.average && secObj.rating.average) {
        if (firstObj.rating.average > secObj.rating.average) {
          return -1
        } else {
          return 1
        }
      }
    })

  
  const sortedShows = [...arrOfObj].slice(arrOfObj.length - (props.rowSize + 1)) 
  
  console.log(arrOfObj)
  console.log(sortedShows)
  // console.log(arrOfObj)
   
  },[arrOfObj])


  // shortening objects in the array of objects here for only x amount of top shows
}








