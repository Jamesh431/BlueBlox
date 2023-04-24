import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import ScaleLoader from "react-spinners/ScaleLoader";

import getOneShow from "../helpers/getOneShow";
import ParseDescription from "../helpers/parseDescription";

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

        <div className="show-rating">
          <p>Rating: {show.rating.average}</p>
        </div>

        <div className="show-description">
          <p><ParseDescription desc={show.summary} /></p>
          {/* Regular Expression notes: the regular expression is defined with the forward slashes, '/', after that are the flags. the 'g' here means global, like match all instead of the first match. The [^ ] is a negated character set. It matches any characters not inside the set, so [^>] would end up returning matching anything but a closing bracket, then after that is the *, which all its doing is taking the previous founded characters (in this case it would be the opening bracket and everything but a closing bracket) and doing it as many times as possible. Then the > means just to find closing brackets */}
        </div>

        <div className="show-network">
          {/* <p>Network: {show.network ? show.network : 'N/A'}</p> */}
          {/* This returns an Objects are not valid as a React child error, find out why*/}
        </div>

        <div className="show-reviews">
          <div className="review-header">
            <h3>Reviews</h3>
          </div>

          <div className="actual-reviews">
            <div className="review-user">
              <p>User</p>
            </div>

            <div className="users-review">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam dicta modi obcaecati odit non in sequi. Iure nostrum maxime, ipsa, culpa quibusdam earum assumenda sed aliquam enim deleniti asperiores?
    Optio sit libero nam praesentium dolore veritatis fuga labore odio recusandae id excepturi culpa animi at nisi nemo cupiditate in reprehenderit inventore, adipisci eaque unde ullam? Tempora hic voluptatem pariatur!</p>
            </div>

            <div className="users-rating">
              <p>Rating: 3/5</p>
            </div>
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