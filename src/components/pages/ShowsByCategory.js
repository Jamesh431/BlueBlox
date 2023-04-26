import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

import FilterShowsByGenre from "../util/FilterShowsByGenre";
import ParseDescription from "../helpers/parseDescription";


export default function ShowsByCategory(){
  const [shows,setShows] = useState([])
  const [sortedGenre,setSortedGenre] = useState("Action")
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    FilterShowsByGenre(sortedGenre)
    .then(showData => {
     setShows(showData)
     setLoaded(true)
   })
   .catch(err => console.error("getOneShow Erro: ", err))
 },[sortedGenre]) 
  
  return(
    <div className="browse-by-category">
      {loaded ?
        <>
          <div className="header-container">
            <div className="header-wrapper">
              <h1>Browse by Category</h1>
            </div>

            <div className="category-selection">
              <select className='category-control' onChange={(event) => {
                setSortedGenre(event.target.value)
              }}>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Anime">Anime</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Espionage">Espionage</option>
                <option value="Family">Family</option>
                <option value="Fantasy">Fantasy</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
                <option value="Legal">Legal</option>
                <option value="Medical">Medical</option>
                <option value="Music">Music</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Science-Fiction">Science-Fiction</option>
                <option value="Sports">Sports</option>
                <option value="Supernatural">Supernatural</option>
                <option value="Thriller">Thriller</option>
                <option value="War">War</option>
                <option value="Western">Western</option>
              </select>
            </div>

          </div>

          <div className="break-wrapper">
            <hr></hr>
          </div>

          <div className="shows-container">
            <div className="genre-header">
              <h1>{sortedGenre}</h1>
            </div>

            <div className="shows-wrapper">
              {shows.map((show) => (
                <div className="show-card" key={show.name}>
                  <div className="show-image">
                    <Link to={`show/${show.id}`}>

                    <img src={show.image.medium}/>
                    </Link>
                  </div>

                  <div className="show-title"> 
                    <h2>{show.name}</h2>
                  </div>

                  <div className="show-description"> 
                  <ParseDescription desc={show.summary} num={200}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>

        :

          <div className="loading"> 
            <ScaleLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            color= "#4BCFFA"
            />
          </div>
        
      }
    </div>

  )
}