import React, { useState } from "react";

const PaginateShows = (props) => {
  const [currentRow, setCurrentRow] = useState(0);
  const numOfShowsOnRow = 5;

  const rowCount = Math.ceil(props.sortedArrOfObj.length / numOfShowsOnRow);
  const indexOfFirstShowInRow = currentRow * numOfShowsOnRow;
  const currentRangeOfRowOfShows = props.sortedArrOfObj.slice(
    indexOfFirstShowInRow,
    indexOfFirstShowInRow + numOfShowsOnRow
  );

  const handlePrevious = () => {
    if (currentRow > 0) {
      setCurrentRow(currentRow - 1);
    }
  };

  const handleNext = () => {
    if (currentRow < rowCount - 1) {
      setCurrentRow(currentRow + 1);
    }
  };

  return (
    <div className="category-container">
      <div className="header-wrapper">
        <h1>{props.category}</h1>
      </div>

      <div className="pagination-container">
        <button onClick={handlePrevious}>previous</button>
      </div>

      <div className="shows-container">
        <div className="shows-wrapper">
          {currentRangeOfRowOfShows.map((show) => (
            <div className="show-card" key={show.name}>
              <h4>{show.name}</h4>
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  );
};

export default PaginateShows;


// with the description for the show, take in the old ... thing we made for class that takes text and shortens it by some length