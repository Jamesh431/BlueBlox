import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import ScaleLoader from "react-spinners/ScaleLoader";

import getOneShow from "../util/getOneShow";

export default function ShowPage() {
  const [show, setShow] = useState([])
  const [loaded, setLoaded] = useState(false)
  const {showID} = useParams()

  useEffect(() => {
     getOneShow(showID)
    .then(showData => {
      console.log(showData)
      setShow(showData)
      setLoaded(true)
    })
    .catch(err => console.error("getOneShow Erro: ", err))
  },[showID]) 
  console.log(show)

  
  return (
    <div className="show-page">
      {loaded ? 
      <>
        <div className="show-title">
          <h1>{show.name}</h1>
        </div>
        <div className="show-image">
          <img src={show.image.medium}/>
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