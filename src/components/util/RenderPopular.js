import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import getShows from "./getShows.js"

export default function RenderPopular() {
  const [currentPage, setCurrentPage] = useState(0)
  const [shows, setShows] = useState([]) 
  const pageSize = 5;

  const pageCount = Math.ceil(shows.length / pageSize)
  const offset = currentPage * pageSize
  const currentData = shows.slice(offset, offset + pageSize)
  
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
  
  {console.log(shows)}
return (
  <div className="category-container">
    <div className="header-wrapper">
      <h1>Most Popular</h1>
    </div>


    <div className="shows-container">
      <div className="shows-wrapper">
      {currentData.map(show => (
        <div className="show-card">
          <div key={show.name}>
            <h1>{show.name}</h1>
          </div>
        </div>
          ))}
      </div>
      <div className="paginate-controls">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"BREAK"}
        pageCount={pageCount}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      </div>
    </div>
  </div>
)
}








