import { useEffect, useState } from "react";

export default function MoviesByCategory(props){
  const [shows,setShows] = useState([])

  useEffect(()=>{
    
  }, [])
  
  return(
    <div className="browse-by-category">
      <div className="header-container">
        <div className="header-wrapper">
          <h1>Browse by Category</h1>
        </div>

      <div className="category-selection">
        <select class='form-control' >
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
          <option value={}></option>
        </select>
      </div>

        <div className="break-wrapper">
          <hr></hr>
        </div>
      </div>

    </div>)
}