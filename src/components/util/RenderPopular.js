import { useEffect, useState } from "react"
// import { sortPopular } from "./FetchInfo.js"
import getShows from "./getShows.js"

// total records
// no. per page 
// no of pages t
// curr page

export default function RenderPopular(props) {
  const [shows, setShows] = useState([])
  const [currentSlice, setCurrentSlice] = useState(0)
  const TOTAL_RECORDS = shows.length
  const PER_PAGE = 10
  const TOTAL_PAGES = TOTAL_RECORDS / PER_PAGE

  // const arrOfObj = [...sortPopular].splice(props.spliceStart, props.rowSize)
  function renderPopularShows() {
    return shows.slice(currentSlice, currentSlice + 10).map(show => {
      return (
        <div key={show.id}>
          <h1>{show.name}</h1>
        </div>
      )
    })
  }

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
  // setNewArrOfObj(sortedShows)
  // console.log(newArrOfObj)
  // return () => {
  //   <div><h1>{newArrOfObj}</h1></div>
  // }
  
 
  // now just map it out to append to the dom
  
return (
  <div className="category-container">
    <div className="header-wrapper">
      <h1>Most Popular</h1>
    </div>

    <div className="show-container">
      <div onClick={() => setCurrentSlice(cs => cs + PER_PAGE)} className="show-wrapper">{renderPopularShows()}</div>
    </div>
  </div>
)

  // shortening objects in the array of objects here for only x amount of top shows
}








