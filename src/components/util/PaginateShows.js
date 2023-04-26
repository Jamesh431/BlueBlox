import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ParseDescription from "../helpers/parseDescription";

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
        <div className="pagination-wrapper">
          <button 
          id="button-left" 
          onClick={handlePrevious}><FontAwesomeIcon 
          icon="fa-solid fa-caret-left" /></button>
        </div>

        <div className="shows-container">
          <div className="shows-wrapper">
            {currentRangeOfRowOfShows.map((show) => (
              <div className="show-card" key={show.name}>
                <div className="show-image">
                  <Link to={`show/${show.id}`}>

                  <img src={show.image.medium}/>
                  </Link>
                </div>

                <div className="show-title"> 
                  <h3>{show.name}</h3>
                </div>

                <div className="show-description"> 
                <ParseDescription desc={show.summary} num={90}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination-wrapper">
          <button 
          id="button-right" 
          onClick={handleNext}><FontAwesomeIcon icon="fa-solid fa-caret-right" /></button>
        </div>
      </div>

      <div className="line-wrapper">
        <hr></hr>
      </div>
    </div>
  );
};

export default PaginateShows;

