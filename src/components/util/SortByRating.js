import { useEffect,useState } from "react"
import FetchInfo from "./FetchInfo"


export default function SortByRating() {
  const [dataSet,setDataSet] =useState([])
  setDataSet = FetchInfo
  useEffect(()=>{
    // FetchInfo(setDataSet=setDataSet)
  },[])
  
  // <FetchInfo />
  

  
  // dataSet.sort()...
  dataSet.sort((firstObj, secObj) => {
    if (firstObj.rating.average && secObj.rating.average) {
      if (firstObj.rating.average > secObj.rating.average) {
        return -1
      } else {
        return 1
      }
    }
  })

  // shortening objects in the array of objects here for only x amount of top shows

  console.log(dataSet)

  const renderCards = () => {

  }

  return(<div>{renderCards()}</div>)
  // return divs code here


}