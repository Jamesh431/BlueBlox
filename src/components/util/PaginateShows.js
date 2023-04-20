import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginateShows = (props) => {
  const [currentRow, setCurrentRow] = useState(0)
  const numOfShowsOnRow = 5

  const rowCount = Math.ceil(props.sortedArrOfObj.length / numOfShowsOnRow)
  const indexOfFirstShowInRow = currentRow * numOfShowsOnRow
  const currentRangeOfRowOfShows = props.sortedArrOfObj.slice(indexOfFirstShowInRow, indexOfFirstShowInRow + numOfShowsOnRow)

  

  return(
    <div className="category-container">
      <div className="header-wrapper">
        <h1>Most Popular</h1>
      </div>

      <div className="shows-container">
        <div className="shows-wrapper">
          {currentRangeOfRowOfShows.map(show => (
            <div className="show-card">
              <div key={show.name}>
                <h4>{show.name}</h4>
              </div>
            </div>
              ))}
        </div>
      

        <div className="react-paginate-controls">
          <ReactPaginate 
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={numOfShowsOnRow}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            onPageChange={({ selected }) => setCurrentRow(selected)}
          />
        </div>
      </div> 
    </div>
  )
}

export default PaginateShows


// with the description for the show, take in the old ... thing we made for class that takes text and shortens it by some length